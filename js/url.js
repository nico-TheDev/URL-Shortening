//get the url from the input value
//check if the url is a valid url

class ShortenURL {
    constructor(url){
        this.url = url;
        this.regex = new RegExp(/^https:\/\/(www\.)?([\w]+)\.([a-z\d]{2,})\/?([\w\.\?\=\/]+)?$/,"gi");
    }

    async postURL(link){
        try{

            const requestObj = {
                "url": `${link}`
              };
            const postRequest = await fetch(`https://rel.ink/api/links/`,
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json;charset=utf-8'
                },
                body:JSON.stringify(requestObj)
            });

            return postRequest.json();
        }catch(err){
            console.log(err);
        }
    }

    autoCopy(e){
        if(e.target.closest('.app__copy')){
            const btn = e.target;
            const link = btn.previousElementSibling.previousElementSibling;
            link.value = link.nextElementSibling.getAttribute('href');
            console.log(link.value);
            // link.select();
            // document.execCommand('copy');
            navigator.clipboard.writeText(link.value).then(res =>{
                btn.textContent = 'Copied!';
                setTimeout(()=> btn.textContent = 'Copy',2000);
            }).catch(err => console.log(err));


           
        }
    }
}