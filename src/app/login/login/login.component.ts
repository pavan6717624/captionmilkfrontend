import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private msg: NzMessageService,private loginService: LoginService) { }
  signUpVisible=false;
  loginVisible=false;
  mobile: string = '';
  name: string = '';
  email: string = '';
  otp: string =  '';
  ngOnInit(): void {
  }
  signUpOpen()
  {
    this.signUpVisible=true;
    this.loginVisible=false;

  }

  loginOpen()
  {
    this.signUpVisible=false;
    this.loginVisible=true;
  }

  signUpClose()
  {
    this.signUpVisible=false;
    this.loginVisible=false;
    this.sendingOTP=false;
    this.otpVerify=false;
    this.successVisible=true;
    this.mobile='';
    this.name='';
    this.otp='';
    this.email='';

  }

  resentOTP=false;

  resendOTP()
  {
    // this.sendingOTP = true;

    // var formData = new FormData();
    // formData.set("mobile",this.mobile+"")
  
    //   this.loginService.resendOTP(formData).subscribe(
  
    //     (res) => { this.sendingOTP=false; console.log(res); if(res){ this.resentOTP=true;} else alert('error'); },
    //     (err) => { this.sendingOTP = false; alert('error occured'); console.log(err);}
  
    //   );

  }

  successVisible= false;

  verifyOTP()
  {
    
    if(this.otp.trim().length == 0)
    {
       this.msg.error("Please provide Valid OTP");
       return;
    }
    this.sendingOTP=true;
    var formData = new FormData();
    formData.set("mobile",this.mobile);
    formData.set("otp",this.otp);
  
      this.loginService.verifyOTP(formData).subscribe(
  
        (res : any) => { this.sendingOTP=false; console.log(res); if(res){ this.msg.success(res.message); this.signUpClose();  } else this.msg.error(res.message);},
        (err) => { this.sendingOTP = false; this.msg.error("Error Occured at Server. Please Try Again."); console.log(err);}
  
      );

  }

  sendingOTP=false;
  otpVerify=false;

  sendOTP()
{

  if(this.name.trim().length == 0)
 {
    this.msg.error("Please provide Valid Name");
    return;
 }
  else if(this.email.trim().length == 0)
  {
    this.msg.error("Please provide Valid EMail Address");
    return;
  }
  else if(this.mobile.trim().length == 0)
  {
    this.msg.error("Please provide Valid Mobile Number");
    return;
  }
  if(!this.checkMobile())
  {
    this.msg.error("Please provide Valid Mobile Number");
    return;
  }
  if(!this.checkEmail())
  {
    this.msg.error("Please provide Valid EMail Address");
    return;
  }
  this.sendingOTP = true;

  var formData = new FormData();
  formData.set("mobile",this.mobile+"");
  formData.set("email",this.email+"");
  formData.set("name",this.name);
    this.loginService.sendOTP(formData).subscribe(

      (res : any) => { this.sendingOTP=false; console.log(res); if(res.status){ this.otpVerify=true;} else this.msg.error(res.message);},
      (err) => { this.sendingOTP = false; this.msg.error("Error Occured at Server. Please Try Again."); console.log(err);}

    );
}

checkMobile()
{
  let isnum = /^\d+$/.test(this.mobile);
    return isnum && this.mobile.length == 10; 
}
checkEmail()
{
 if (this.email.trim().indexOf('@')==-1 || this.email.trim().indexOf('@') != this.email.trim().lastIndexOf('@') || this.email.trim().lastIndexOf('@') > this.email.trim().lastIndexOf('.')  || this.email.trim().endsWith('.') || this.email.trim().startsWith('@')  || this.email.trim().endsWith('@') || this.email.trim().startsWith('.') || this.email.trim().indexOf('.')==-1) 
 return false;
 else
 return true;
}

sendLoginOTP()
{
 if(this.mobile.trim().length == 0)
  {
    this.msg.error("Please provide Valid Mobile Number");
    return;
  }
  if(!this.checkMobile())
  {
    this.msg.error("Please provide Valid Mobile Number");
    return;
  }


  this.sendingOTP = true;

  var formData = new FormData();
  formData.set("mobile",this.mobile+"");
 
    this.loginService.sendLoginOTP(formData).subscribe(

      (res : any) => { this.sendingOTP=false; console.log(res); if(res.status){ this.msg.success("Login Successful!")} else this.msg.error(res.message);},
      (err) => { this.sendingOTP = false; this.msg.error("Error Occured at Server. Please Try Again."); console.log(err);}

    );
}

}
