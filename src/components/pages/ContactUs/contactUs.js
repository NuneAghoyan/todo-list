import { mapMutations } from 'vuex';
import FormApi from '../../../utils/formApi.js';
const formApi = new FormApi();
const emailRegex = /^\S+@\S+\.\S+$/;

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            nameRules: [(v) => !!v || 'Name is required'],
            emailRules: [(v) => !!v || 'Email is required', (v) => emailRegex.test(v) || 'Invalid email'],
            messageRules: [(v) => !!v || 'Message is required'],
        }
    },

    methods: {
        ...mapMutations(['toggleLoading']),

        async send() {
            const isValid = await this.validate();
            if (!isValid) {
                return
            }
            const form = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            this.toggleLoading();
            formApi
                .sendForm(form)
                .then(() => {
                    this.reset();
                    this.$toast.success('The form has been send!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        async validate() {
            const { valid } = await this.$refs.form.validate();
            return valid;
        },
        reset() {
            this.$refs.form.reset();
        },
        handleError(error) {
            this.$toast.error(error.message);
        },
    }
}