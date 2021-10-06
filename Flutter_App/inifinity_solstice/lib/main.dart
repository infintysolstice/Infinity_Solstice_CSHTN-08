import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'Home.dart';
import 'package:flutter/services.dart';
void main() async{
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp,DeviceOrientation.portraitDown]);
await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

      home: Splashcreen(),
    );
  }
}

class Splashcreen extends StatefulWidget {
  @override
  State<Splashcreen> createState() => _SplashcreenState();
}

class _SplashcreenState extends State<Splashcreen> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    splash();
  }

  @override

  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        //color: Colors.black,
        child: Center(child: Column(
          children: [
            Container(child: Image.asset('images/web-dev-icon-2.png'),),
           Container(child: Image.asset('images/web_imag.png'),),
          ],
        )),
      ),
    );
  }
  splash() async {
    var user=await FirebaseAuth.instance.currentUser;
    print(user);
    //  var isSignedIn = await AuthService().handleAuth();
    setState(() {});
    if (user!=null){


      await Future.delayed(Duration(milliseconds: 1500));
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (_) => HomeScreen()));



    }
    else{

      await Future.delayed(Duration(milliseconds: 1500));
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (_) => Login_Page()));



    }
  }

}


class Login_Page extends StatefulWidget {



  @override
  _Login_PageState createState() => _Login_PageState();
}

class _Login_PageState extends State<Login_Page> {
  FirebaseAuth auth=FirebaseAuth.instance;
  final _formkey=GlobalKey<FormState>();
PageController _pageController=PageController();
  TextEditingController email=TextEditingController();
  int _currentindex=0;
  TextEditingController name=TextEditingController();
  TextEditingController phone=TextEditingController();
  TextEditingController password=TextEditingController();
  @override
  Future login()async {
    try {
      UserCredential credential = await FirebaseAuth.instance
          .signInWithEmailAndPassword(
          email: email.text, password: password.text);
                Navigator.pushReplacement(context, MaterialPageRoute(builder: (BuildContext context){
                  return HomeScreen();
                }));
    }
    catch(e){
      if(e.toString().contains('empty')) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Fields Empty'), duration: Duration(seconds: 1),),);
        print(e);
      }
      else if(e.toString().contains('already in use')){
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Email already registered'), duration: Duration(seconds: 1),),);
      }
      else if(e.toString().contains("no user record")){
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text("No such user exists"), duration: Duration(seconds: 1),),);
      }
      else{
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text(e.toString()), duration: Duration(seconds: 1),),);
      }

     
    }
  }
  Future signin()async{
    try {
      UserCredential credential = await FirebaseAuth.instance
          .createUserWithEmailAndPassword(
          email: email.text.toString(), password: password.text.toString());

        FirebaseFirestore.instance.collection("users")
            .doc(email.text)
            .set({
          "name": name.text,
          "email": email.text,
          "phone": phone.text,
        })
            .then((value) {
          Navigator.pushReplacement(context, MaterialPageRoute(builder: (BuildContext context){
            return HomeScreen();
          }));
          //   signin();
          //Future.delayed(Duration(seconds: 2));
          print('added');
        });

      }

    catch(e){
      if(e.toString().contains('empty')) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Fields Empty'), duration: Duration(seconds: 1),),);
        print(e);
      }
      else if(e.toString().contains('already in use')){
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Email already registered'), duration: Duration(seconds: 1),),);
      }
      else{
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text(e.toString()), duration: Duration(seconds: 1),),);
      }
    }
  }

  void initState() {

 //   print(videoId);
    // TODO: implement initState
    super.initState();
  }
  @override

 // String videoId=YoutubePlayer.convertUrlToId("https://www.youtube.com/watch?v=BBAyRBTfsOU")??'';
  //print(videoId); // BBAyRBTfsOU



  Widget build(BuildContext context) {
   //print(auth.currentUser);
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: PageView.builder(
        itemBuilder: (BuildContext context,int pages){
          return _currentindex==0?Container(

            color: Colors.white,
            child: Column(
              // mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  //color: Colors.red,
                  margin: EdgeInsets.only(top: MediaQuery.of(context).size.height*0.2),
                  height: 100.0,
                  child: Row(
                  //  mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                         // padding: EdgeInsets.only(),
                          child: Flexible(child: Text('Hey There,Sign Up to get started ',style: TextStyle(fontWeight: FontWeight.w600,fontSize: 30.0),))),
                    ],
                  ),
                ),
                SizedBox(height: 30.0,),
                Container(
                  padding: EdgeInsets.all(20.0),
                  child: TextFormField(

                    controller: email,
                    onChanged: (email){
                      print(email);
                    },
                    decoration: InputDecoration(
                        hintText: "Email"

                    ),
                  ),
                ),
                SizedBox(height: 30.0,),
                Container(
                  padding: EdgeInsets.all(20.0),
                  child: TextFormField(
                    controller: password,
                    obscureText: true,
                    onChanged: (pass){
                      print(pass);
                    },
                    decoration: InputDecoration(
                        hintText: "Password"

                    ),
                  ),
                ),
                GestureDetector(

                  onTap: (){
                    login();
                   // signin();
                  },
                  child: Container(
                    child: Center(child: Text('Login',style: TextStyle(color: Colors.white,fontSize: 20.0),)),
                    decoration: BoxDecoration(
                      color: Colors.blue,
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                    //  color: Colors.red,
                  // padding: EdgeInsets.all(6.0),
                    height: 40.0,
                    width: MediaQuery.of(context).size.width*0.78,
                  ),
                ),
                SizedBox(height: 20.0,),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(child: Text('Have not enrolled yet?',style: TextStyle(color: Colors.black,fontSize: 18.0),)),
                    GestureDetector(
                        onTap: (){
                          _pageController.animateToPage(_currentindex=1, duration: Duration(milliseconds: 300), curve: Curves.decelerate);
                        },
                        child: Container(child: Text('Enroll here',style: TextStyle(color: Colors.blueAccent,fontSize: 18.0,fontWeight: FontWeight.w600),))),
                  ],
                ),

                //onReady () {
                //controller.addListener(listener);
                //},
                //),
              ],
            ),
          ):Container(
            color: Color(0xff10CEC6),
            child: Column(
              children: [
                Container(
                  height: MediaQuery.of(context).size.height*0.07,
                ),
                Container(

                 // margin: EdgeInsets.only(top: 50.0,left: 10.0),
                  child: Row(
                    children: [
                      Icon(Icons.keyboard_arrow_left,size: 18.0,color: Colors.white,),
                      GestureDetector(
                          onTap: (){
                            _pageController.animateToPage(_currentindex=0, duration: Duration(milliseconds: 300), curve: Curves.easeOut);
                          },
                          child: Text('Back',style: TextStyle(color: Colors.white,fontWeight: FontWeight.w600,fontSize: 18.0),)),
                    ],
                  ),),
                  //SizedBox(height: 150.0,),
                CircleAvatar(
                  maxRadius: 80.0,
                  child: Image.asset('images/1725265.png'),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    children: [
                      Text('Your first step with \n us!',style: TextStyle(color: Colors.white,fontSize: 30.0,fontWeight: FontWeight.w600),),
                    ],
                  ),
                ),

                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(



                    decoration: BoxDecoration(
                      color: Colors.white,
                  borderRadius: BorderRadius.circular(12.0),),
                    child: Column(
                      children: [

                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(

                            decoration: BoxDecoration(

                            color: Colors.white,
                              borderRadius: BorderRadius.circular(10.0),
                            ),

                            //padding: EdgeInsets.all(20.0),
                            child: TextFormField(
                              controller: name,
                              onChanged: (name){
                                print(name);
                              },
                              decoration: InputDecoration(
                                enabledBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(color: Color(0xff10CEC4)),
                                ),

                                  contentPadding: EdgeInsets.only(left:10.0,top: 10.0,bottom: 10.0),
                                  // border: Border.d,
                                  border: InputBorder.none,
                                  hintText: "Name"

                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: 15.0,),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(

                            decoration: BoxDecoration(

                              color: Colors.white,
                              borderRadius: BorderRadius.circular(10.0),
                            ),

                            //padding: EdgeInsets.all(20.0),
                            child: TextFormField(
                              controller: email,
                              onChanged: (email){
                                print(email);
                              },
                              decoration: InputDecoration(
                                  enabledBorder: UnderlineInputBorder(
                                    borderSide: BorderSide(color: Color(0xff10CEC4)),
                                  ),
                                  contentPadding: EdgeInsets.only(left:10.0,top: 10.0,bottom: 10.0),
                                  // border: Border.d,
                                  border: InputBorder.none,
                                  hintText: "Email"

                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: 15.0,),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(

                            decoration: BoxDecoration(

                              color: Colors.white,
                              borderRadius: BorderRadius.circular(10.0),
                            ),

                            //padding: EdgeInsets.all(20.0),
                            child: TextFormField(
                              controller: phone,
                              onChanged: (phone){
                                print(phone);
                              },
                              decoration: InputDecoration(
                                enabledBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(color: Color(0xff10CEC4)),
                                ),

                                contentPadding: EdgeInsets.only(left:10.0,top: 10.0,bottom: 10.0),
                                // border: Border.d,
                                border: InputBorder.none,
                                hintText: "Phone No.",


                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: 15.0,),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(


                            //padding: EdgeInsets.all(20.0),
                            child: TextFormField(
                              controller: password,
                              onChanged: (pass){
                                print(pass);
                              },
                              decoration: InputDecoration(
                                  enabledBorder: UnderlineInputBorder(
                                    borderSide: BorderSide(color: Color(0xff10CEC4)),
                                  ),
                                // focusedBorder: OutlineInputBorder(
                                //   borderSide: BorderSide(color: Color(0xff10CDC6))
                                // ),
                                  contentPadding: EdgeInsets.only(left:10.0,top: 10.0,bottom: 10.0),
                                  // border: Border.d,
                                  border: InputBorder.none,
                                  hintText: "Password"

                              ),
                            ),
                          ),
                        ),
                        SizedBox(height: 15.0,),
                        GestureDetector(
                          onTap: (){
                            signin();

                            //Future.delayed(D);

                          },
                          child: Container(
                            height: 40.0,
                            width: 160.0,
                            decoration: BoxDecoration(
                              color: Color(0xff03AAC2),
                              borderRadius: BorderRadius.circular(20.0),
                            ),
                            child: Center(child: Text('Register',style: TextStyle(color: Colors.white,fontSize: 20.0,fontWeight: FontWeight.w500),)),),
                        ),
                        SizedBox(height: 30.0,),
                      ],
                    ),
                  ),
                ),
               // SizedBox(height: 100.0,),

              ],
            ),
          );
        },
        physics: NeverScrollableScrollPhysics(),
        controller: _pageController,
      ),
    );

  }

}


