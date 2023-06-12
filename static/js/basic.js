const btn = document.getElementById('sendData');
import { client } from 'https://unpkg.com/@passwordless-id/webauthn'

btn.addEventListener('click',()=>{
    console.log("yaa its working!");
    async function temp(){
        const username = document.getElementById('username').value;

        const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e"
        const registration = await client.register(username, challenge, {
          "authenticatorType": "auto",
          "userVerification": "required",
          "timeout": 60000,
          "attestation": false,
          "debug": false
        })

        console.log(registration);
        const response = await fetch('api/register' , {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                registration:registration
            })
        })
        const data = await response.json();
        if(data.key==='Auth'){
            window.location.replace('/');
        }
        else{
            window.alert("You are not Veritified");
        }
        console.log(data);  
        
    }
    temp();
});
