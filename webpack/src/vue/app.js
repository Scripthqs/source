export default {
    template: `
    <div>
        <h2>{{ message }}</h2>
        <button @click='btnClick'>按钮</button>
        <h2>{{ name }}</h2>
    </div>
    `,
    data(){
        return {
            message: '你好，我是App中的message',
            name: '我是App中的name'
        }
    },
    methods: {
        btnClick(){
            console.log('我是App中的btnclick');
        }
    }
}