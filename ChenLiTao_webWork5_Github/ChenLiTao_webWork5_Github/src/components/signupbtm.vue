<template>
    <div class="signupbtm">
        <div class="signupbtmh2">
            <h232pxffffff msg="Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things." class="h232pxffffffDiv"/>
        </div>
        <form action="" class="signupbtmForm">
            <div class="signupbtmUsername">
                <p class="signupbtmformP">
                    Username
                </p>
                <input type="text">
            </div>
            <div class="signupbtmEmail">
                <p class="signupbtmformP">
                    Email
                </p>
                <input type="text">
            </div>
            <div class="signupbtmPassword">
                <p class="signupbtmformP">
                    Password
                </p>
                <input type="password">
            </div>
            <btn :fatherStyle="obj"  msg="Sign up for Github"/>
        </form>
        <div class="signupbtmDIv">
            <p class="signupbtmP">
                By clicking “Sign up for GitHub”, you agree to our
                <span class="signupbtmSpan">terms of service</span>
                and
                <span class="signupbtmSpan">privacy statement</span>
                We’ll occasionally send you account related emails.
            </p>
        </div>
    </div>
</template>

<script>
import h232pxffffff from './TEXT/h232pxffffff'
import btn from './btn/btn'
export default {
    name:'signupbtm',
    components:{
        h232pxffffff,
        btn,
    },
    data:function(){
        return{
            obj:{
                'background-color':'#2ebc4f',
                'font-weight': '500',
                'font-size':'16px',
                'border-radius':'6px',
                color:'#ffffff',
                width:'312px',
                height:'54.8px',
                margin:'8px 0px 4px 0px',
                padding:'16px 0px',
                border:'none',
            },
        }
    }
}
</script>

<style>
    .signupbtm{
        background-color: #24292e;
        padding:80px 0px;
    }
    .signupbtmh2{
        width: 980px;
        margin: 0 auto;
    }
    .signupbtm{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .signupbtmP{
        font-size: 14px;
        color: #6a737d;
    }
    .signupbtmSpan{
        color: #ffffff;
    }
    form.signupbtmForm input{
        width: 280px;
        height: 25px;
        padding: 10px;
        border-radius: 5px;
        margin-right: 20px;
    }
    .signupbtmForm{
        display: flex;
        margin-top: 60px;
    }
    .signupbtmDIv{
        margin-top: 40px;
    }
    .signupbtmformP{
        color: #ffffff;
        font-size: 14px;
        margin-bottom: 4px;
    }
</style>