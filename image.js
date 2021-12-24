
        var image = document.getElementById("image_upload")
        function readUrl(input){
            if(input.files){
                var reader = new FileReader()
                reader.readAsDataURL(input.files[0])
                reader.onload = (e) =>{
                    image.src = e.target.result;
                }
            }

        }
