class Storage2 {
    constructor(){
        this.urlArr = this.getStorage();
    }

    getStorage(){
        console.log('LOADED')
        if(localStorage.getItem('data')){
            return JSON.parse(localStorage.getItem('data'));
        }else{
            return [];
        }
    }

    updateStorage(url,id){
        const obj = {
            url,
            id
        }
        this.urlArr.push(obj);

        localStorage.setItem('data',JSON.stringify(this.urlArr));
    }


    
}