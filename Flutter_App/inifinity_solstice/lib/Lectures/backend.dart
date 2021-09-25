import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

import 'package:inifinity_solstice/Quiz/QuizPage.dart';







class Backend extends StatefulWidget {
  @override
  _BackendState createState() => _BackendState();
}

class _BackendState extends State<Backend> {
  late YoutubePlayerController _controller=YoutubePlayerController(initialVideoId: YoutubePlayer.convertUrlToId("https://youtu.be/k_0ZzvHbNBQ").toString());
  late List<String> videos=[];
  late List<String> titles=[];



  @override
  void initState() {
//_getter().whenComplete(() => setState((){}));
    FirebaseFirestore.instance.collection("backend").doc(
        "ufV0NVakWQECaXOBae2t").get().then((value) {
      setState(() {
        for (var x in value["titles"]) {
          titles.add(x);
        }
        for (var x in value["url"]) {
          videos.add(x);
          print(videos[0]);
        }

        //phone=value["phone"];
        // widget.email=value["email"];
      });
    });
//_controller.setVolume(4);
    super.initState();

  }
  @override
  void deactivate() {
    _controller.pause();
    // TODO: implement deactivate
    super.deactivate();
  }
  void dispose() {
    _controller.dispose();
    // TODO: implement dispose
    super.dispose();
  }
  @override

  Widget build(BuildContext context) {

    // print(videos[0]);
    return  Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xff16448F),
        centerTitle: true,
        title: Text('NodeJS+MongoDB',style: TextStyle(fontSize: 20.0,color: Colors.white,fontWeight: FontWeight.w700),),),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [

            Container(
              child: YoutubePlayerBuilder(
                player: YoutubePlayer(
                  controller: _controller,
                  showVideoProgressIndicator: true,
                  progressIndicatorColor: Colors.amber,
                  progressColors: ProgressBarColors(
                    playedColor: Colors.amber,
                    handleColor: Colors.amberAccent,

                  ),
                  onReady: () {
                    _controller.addListener(() {});
                  },
                ),
                builder: (context, player) => player,
              ),
            ),
            Expanded(
              child: Container(
                color: Color(0xff16448F),

                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text('Backend Course',style: TextStyle(color: Colors.white,fontSize: 30.0,fontWeight: FontWeight.w700),),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [

                        Text('Lectures',style: TextStyle(color: Colors.white,fontSize: 20.0,fontWeight: FontWeight.w700),),
                        GestureDetector(
                            onTap: (){Navigator.push(context, MaterialPageRoute(builder: (context)=>QuizPage()));},
                            child: Text('Quiz',style: TextStyle(color: Colors.white,fontSize: 20.0,fontWeight: FontWeight.w700),)),
                      ],),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        for(int i=0;i<titles.length;i++)Padding(
                          padding: const EdgeInsets.all(8.0),

                          child: GestureDetector(
                            onTap: (){
                              _controller.load(YoutubePlayer.convertUrlToId(videos[i]).toString());
                              //_controller.pause();

                            },
                            child: Container(
                              //color: Colors.black,
                                child: Text(titles[i].toString(),style: TextStyle(color: Colors.white,fontWeight: FontWeight.w700,fontSize: 30.0),)),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),   //      SizedBox(height: 20.0,),
          ],
        ),
      ),
    );
  }
}

