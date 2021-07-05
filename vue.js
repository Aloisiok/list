    
    const api = new Vue({
        el: "#api", 
        data () {
            return {
                characters: [],
                personagem: [],
                imgUrl: '',
                mostrar: false,
            }
        },
        mounted () {
            axios
            .get('https://www.breakingbadapi.com/api/characters/')
            .then(response => (this.characters = response))
            document.getElementById('api').style.display = 'block';
        },
        methods: {
            mostrarSelecionado: function (id){ 
                this.personagem = this.characters.data.find(busca => busca.char_id === id); 
                this.imgUrl = this.personagem.img; 
                this.mostrar = true;  
            },        
        },   
    })