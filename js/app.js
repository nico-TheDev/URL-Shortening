
// initialize the shortener
const postLink = new ShortenURL();
const ui = new UI();

function getShortLink(e){
    e.preventDefault();
    const urlText = ui.inputField.value;

    if(urlText !== ''){
        if(postLink.regex.test(urlText)){
            console.log('this is a url');
            
            const response = postLink.postURL(urlText).then(res => {
                const hashID = res.hashid;
                console.log(hashID);
                ui.addToList(urlText,hashID);

                ui.clearInput();
            });

        }else{
            ui.showAlert('Please input a valid url');
        }
    }else{
        ui.showAlert('Please add a link')
    }

}

// btn event


ui.form.addEventListener('submit',getShortLink);
