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
}