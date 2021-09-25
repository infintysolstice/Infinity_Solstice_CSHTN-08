import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'main.dart';
import 'Quiz/QuizPage.dart';
import 'Lectures/html.dart';
import 'Lectures/javascript.dart';
import 'Lectures/css.dart';
import 'Lectures/backend.dart';
import 'package:cupertino_icons/cupertino_icons.dart';
import 'package:flutter/services.dart';
class HomeScreen extends StatefulWidget {
  String ?name;
  String ?phone;
  String ?email;
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentindex=0;
  int selectedTab=0,clickedTab=0;

  FirebaseAuth auth=FirebaseAuth.instance;

  @override
  void initState() {
    FirebaseFirestore.instance.collection("users").doc(auth.currentUser!.email).get().then((value) {
             // print(value.data());
      setState(() {
        widget.name=value["name"];
        widget.phone=value["phone"];
        widget.email=value["email"];
      });
    });
    //email=auth.currentUser.email;
    // TODO: implement initState
    super.initState();
  }
  @override

  Widget build(BuildContext context) {
    print(widget.phone);
    print(auth.currentUser!.email);

    return Scaffold(

      bottomNavigationBar: Theme(
        data: Theme.of(context).copyWith(canvasColor: Colors.white,primaryColor: Colors.black,textTheme: TextTheme()),

        child: Container(
          height: 80.0,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.only(topRight: Radius.circular(30.0),topLeft: Radius.circular(30.0),),
              boxShadow: [BoxShadow(color: Colors.black26,spreadRadius: 0,blurRadius: 10)]
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.only(
              topRight: Radius.circular(30.0),topLeft: Radius.circular(30.0),

            ),
            child: BottomNavigationBar(
              selectedFontSize: 12.0,
              selectedItemColor: Colors.black,
              //unselectedFontSize: 12.0,
              unselectedLabelStyle: TextStyle(color: Colors.black,fontWeight: FontWeight.w500),
              currentIndex: _currentindex,
              onTap: (index){
                if(index==0)
                  setState(() {
                    _currentindex=0;
          //          selectedTab=1;
            //        clickedTab=0;

                  });
                if(index==1){

                  setState(() {
                    _currentindex=1;
      //              selectedTab=1;
        //            clickedTab=1;
                  });
                }
                if(index==2){
                  setState(() {
                    _currentindex=2;
              //      selectedTab=0;
                  });

                }


              },

              type: BottomNavigationBarType.fixed,
              //selectedItemColor: MyColors.red,
              items: [

                //BottomNavigationBarItem(icon: Image.asset('assets/images/Auction.png',fit: BoxFit.contain,),label: 'Ongoing Bid'),
                //BottomNavigationBarItem(icon: Icon(Icons.check_circle,color: Colors.black,),label: 'Confirmed'),
                BottomNavigationBarItem(icon: Icon(Icons.home,color: Colors.black,),label: 'Home'),

                //BottomNavigationBarItem(icon: Image.asset('assets/images/Delivery.png',fit: BoxFit.contain,),label: 'Delivered'),
                BottomNavigationBarItem(icon: Icon(Icons.perm_identity,color: Colors.black,),label: 'Personal Info'),
                 BottomNavigationBarItem(icon: Icon(Icons.book,color: Colors.black,),label: 'About'),
              ],

            ),
          ),
        ),
      ),

      appBar: AppBar(
        actions: [ Icon(Icons.question_answer),],
        centerTitle: true,
        title: Text('Infinity Solstice',style: TextStyle(color: Colors.white),),
        backgroundColor: Color(0xff251B57),
      ),
      drawer: Drawer(

        child: ListView(

          //mainAxisAlignment: MainAxisAlignment.center,
          children: [

            Container(


                height: 50.0,
                child: DrawerHeader(decoration: BoxDecoration(color: Color(0xff251B57)),child: Center(child: Icon(Icons.line_weight)),)),
            Container(
              color: Color(0xff251B57),
              child: Column(

                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [

                  GestureDetector(
                    onTap: (){
                      setState(() {
                        _currentindex=0;
                      });
                      Navigator.pop(context);

                    },
                    child: ListTile(
                      title: Text('Home',style: TextStyle(color: Colors.white),),
                    ),
                  ),
                  GestureDetector(
                    onTap: (){
                      setState(() {
                        _currentindex=2;
                      });
                      Navigator.pop(context);

                    },
                    child: ListTile(
                      title: Text('About',style: TextStyle(color: Colors.white),),
                    ),
                  ),
                  GestureDetector(
                    onTap: (){
                      Navigator.push(context, MaterialPageRoute(builder: (context)=>QuizPage()));

//                      Navigator.pop(context);

                    },
                    child: ListTile(
                      title: Text('Quiz',style: TextStyle(color: Colors.white),),
                    ),
                  ),

                  GestureDetector(
                    onTap: (){
                      Navigator.push(context, MaterialPageRoute(builder: (context)=>Html()));

                    },
                    child: ListTile(
                      title: Text('Courses',style: TextStyle(color: Colors.white),),
                    ),
                  ),
                  //  Container(),
                  SizedBox(height: MediaQuery.of(context).size.height*0.55,),
                  GestureDetector(
                    onTap: (){
                      FirebaseAuth auth=FirebaseAuth.instance;
                      auth.signOut();
                      Navigator.pushReplacement(context,MaterialPageRoute(builder: (BuildContext context)=>Login_Page(),));
                    },
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      //color: Colors.red,
                      child: ListTile(
                        title: Center(child: Text('Logout')),
                      ),
                    ),
                  ),

                ],),
            ),

          ],
        ),
      ),
      body: PageView.builder(
        itemBuilder: (BuildContext context,int index){
          return _currentindex==0? Container(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
            //  mainAxisAlignment: MainAxisAlignment.center,
              children: [
                CircleAvatar(
                  radius: 140.0,

                  backgroundImage: AssetImage('images/web_im.jpg'),),
                SizedBox(height: 40.0,),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text("Featured",style: TextStyle(fontWeight: FontWeight.w700,fontSize: 20.0),),
                ),

                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    color: Colors.grey.withOpacity(0.6),
                    height: 1.0,
                    width: double.infinity,
                  ),
                ),

                Container(
                  height: MediaQuery.of(context).size.height*0.3,
                  child: ListView(

                    // This next line does the trick.
                    scrollDirection: Axis.horizontal,
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: GestureDetector(
                          onTap: (){
                            Navigator.push(context, MaterialPageRoute(builder: (context)=>Html()));
                          },
                          child: Card(
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15.0),
                            ),
                            elevation: 10.0,

                            child:Container(
                              width: 150.0,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15.0),
                                    //color: Color(0xffE65127)
                                    gradient:LinearGradient(
                                        colors: [
                                          Color(0xffE65127),
                                          Color(0xffF2672E),
                                          //add more colors for gradient
                                        ],
                                        begin: Alignment.topLeft, //begin of the gradient color
                                        end: Alignment.bottomRight, //end of the gradient color
                                        stops: [0.2, 0.8] //
                                ),),
                                child: Center(child: Text('HTML',style: TextStyle(fontSize: 30.0,color: Colors.white,fontWeight: FontWeight.w700),))),
                        //  color: Colors.red,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: GestureDetector(
                          onTap: (){
                            Navigator.push(context, MaterialPageRoute(builder: (context)=>Css()));
                          },
                          child: Card(
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15.0),
                            ),
                            elevation: 10.0,

                            child: Container(
                              width: 150.0,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15.0),
                                //    color: Color(0xff551245)

                              gradient:LinearGradient(
                                  colors: [
                                    Color(0xffE7A328),
                                    Color(0xffF2BF26),
                                    //add more colors for gradient
                                  ],
                                  begin: Alignment.topLeft, //begin of the gradient color
                                  end: Alignment.bottomRight, //end of the gradient color
                                  stops: [0.2, 0.8] //
                              ),),
                              child: Center(child: Text('CSS',style: TextStyle(fontSize: 30.0,color: Colors.white,fontWeight: FontWeight.w700),))),
                               // child: Text('Uncover the mistery behind with learning backend',style: TextStyle(color: Colors.white),)),
                            //color: Colors.blue,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(15.0),
                          ),
                          elevation: 10.0,
                          // width: 200.0,
                          child: GestureDetector(
                            onTap: (){

                                Navigator.push(context, MaterialPageRoute(builder: (context)=>Js()));

                            },
                            child: Container(
                              width: 150.0,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15.0),
                                  gradient:LinearGradient(
                                      colors: [
                                        Color(0xff0C73B8),
                                        Color(0xff30AADD),
                                        //add more colors for gradient
                                      ],
                                      begin: Alignment.topLeft, //begin of the gradient color
                                      end: Alignment.bottomRight, //end of the gradient color
                                      stops: [0.2, 0.8] //
                                  ),
                                ),
                                child: Center(child: Text('JavaScript',style: TextStyle(fontSize: 30.0,color: Colors.white,fontWeight: FontWeight.w700),))),
                               // child: Center(child: Text('Start making full stack projects',style: TextStyle(color: Colors.white),))),
                          ),
                          //color: Colors.green,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(15.0),
                          ),
                          elevation: 10.0,
                          // width: 200.0,
                          child: GestureDetector(
                            onTap: (){

                              Navigator.push(context, MaterialPageRoute(builder: (context)=>Backend()));

                            },
                            child: Container(
                              width: 150.0,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(15.0),
                                  gradient:LinearGradient(
                                      colors: [
                                        Color(0xff1C8B3E),
                                        Color(0xff3DA73E),
                                        //add more colors for gradient
                                      ],
                                      begin: Alignment.topLeft, //begin of the gradient color
                                      end: Alignment.bottomRight, //end of the gradient color
                                      stops: [0.2, 0.8] //
                                  ),
                                ),
                                child: Center(child: Text('NodeJS+\nMongoDB',style: TextStyle(fontSize: 30.0,color: Colors.white,fontWeight: FontWeight.w700),))),
                                //child: Center(child: Text('Deep Dive Into Backend',style: TextStyle(color: Colors.white),))),
                          ),
                          //color: Colors.green,
                        ),
                      ),
                    ],
                  ),
                )

              ],
            ),
          ):_currentindex==1?Container(
            child: Column(
             // mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    elevation: 8.0,
                    child: Container(
                      padding: EdgeInsets.only(top: 10.0,bottom: 10.0),

                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        child: Center(child: Text('Personal Info',style: TextStyle(fontSize: 25.0,color: Colors.redAccent,fontWeight: FontWeight.w700),))),
                  ),
                ),
                SizedBox(height: 100.0,),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    height: 300.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    //margin: EdgeInsets.only(left: 50.0),
                    child: Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15.0),
                      ),
                      elevation: 10.0,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            padding: EdgeInsets.all(10.0),
                            child: Row(

                              // mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Expanded(child: Text('Name',style: TextStyle(fontWeight: FontWeight.w600,fontSize: 20.0,color: Colors.black),)),

                                Expanded(child: Text(widget.name.toString(),style: TextStyle(fontWeight: FontWeight.w600,fontSize: 20.0,color: Colors.black),)),
                              ],

                            ),
                          ),
                          Container(
                            padding: EdgeInsets.all(10.0),
                            child: Row(

                              // mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Expanded(child: Text('Contact',style: TextStyle(fontWeight: FontWeight.w600,fontSize: 20.0,color: Colors.black),)),

                                Expanded(child: Text(widget.phone.toString(),style: TextStyle(fontWeight: FontWeight.w600,fontSize: 20.0,color: Colors.black),)),
                              ],

                            ),
                          ),
                          Container(
                            padding: EdgeInsets.all(10.0),
                            child: Row(

                             // mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Expanded(child: Text('Email',style: TextStyle(fontWeight: FontWeight.w600,fontSize: 20.0,color: Colors.black),)),

                                Expanded(child: Text(widget.email.toString(),style: TextStyle(fontWeight: FontWeight.w600,fontSize: 20.0,color: Colors.black),)),
                              ],

                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),

              ],
            ),
          ):_currentindex==2?SingleChildScrollView(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    elevation: 8.0,
                    child: Container(
                        padding: EdgeInsets.only(top: 10.0,bottom: 10.0),

                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        child: Center(child: Text('About',style: TextStyle(fontSize: 25.0,color: Colors.redAccent,fontWeight: FontWeight.w700),))),
                  ),
                ),
              SizedBox(height: 100.0,),
            Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              

            decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10.0),
            ),
            //margin: EdgeInsets.only(left: 50.0),
            child: Card(
            shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15.0),
            ),
            elevation: 10.0,
            child: Container(
              padding: EdgeInsets.all(8.0),
              child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text('Welcome,\n We at Infinity Solstice are very excited to bring to the society,this platform of E leaning where students,teachers and keens learners can grasp knwoledge and practise from this forver increasing database of resources in the fields of IT and Computers',style: TextStyle(fontSize: 20.0,fontWeight: FontWeight.w600),),
                    SizedBox(height: 50.0,),
                  Text("Web development gives you the opportunity to express yourself creatively on the internet. If you have an idea you would like to try as you discover your web dev skills, try it out. Web dev is a fun, creative experience Deciding a career will always be a difficult decision, especially when you're unsure of what the outcome will be after you've invested time and money into learning a new trade. Fortunately, the high demand, easy-to-learn, fun-to-experience life of a web developer is always a great choice for someone ready to have an exciting career in code."

                    ,style: TextStyle(fontSize: 15.0,fontWeight: FontWeight.w500),),
              ]
              ),
            ),
            )
            ),)]),
          ):Container();
        },

      ),
    );
  }
}
