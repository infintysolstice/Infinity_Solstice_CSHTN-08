import 'package:flutter/material.dart';
import 'quiz.dart';
import 'result.dart';



class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  @override

  final _questions = const [
    {
      'questionText': 'Q1. HTML stands for?',
      'answers': [
        {'text': 'Hyper Tax Makes Line', 'score': -2},
        {'text': 'Holistick Technical Method Library', 'score': -2},
        {'text': 'Hyper Text Markup Language', 'score': 10},
        {'text': 'None', 'score': -2},
      ],
    },
    {
      'questionText': 'Q2. ALL HTML tags are enclosed in what?',
      'answers': [
        {'text': '# and #', 'score': -2},
        {'text': '? and !', 'score': -2},
        {'text': ' { and }', 'score': -2},
        {
          'text':
          ' < and >',
          'score': 10
        },
      ],
    },
    {
      'questionText': ' Q3. To add a plain color background to your web page, use which of the following?',
      'answers': [
        {'text': '<body bgcolor= “36,24,35”>', 'score': -2},
        {'text': ' <body bgcolor= “# FF000”>', 'score': 10},
        {'text': '<body color= “# FF000”>', 'score': -2},
        {'text': 'All of the above', 'score': -2},
      ],
    },
    {
      'questionText': 'Q4. What does the <br> tag add to your webpage??',
      'answers': [
        {'text': 'Line Break', 'score': 10},
        {'text': 'Long Break', 'score': -2},
        {'text': 'Paragraph Break', 'score': -2},
        {'text': 'None', 'score': -2},
      ],
    },
    {
      'questionText':
      'Q5. The first tag inside <TABLE> tag is _______',
      'answers': [
        {
          'text': ' <HEAD>',
          'score': -2,
        },
        {'text': '<CAPTION>', 'score': 10},
      ],
    },
    {
      'questionText': 'Q6. Which one of the following also known as Conditional Expression:',
      'answers': [
        {'text': 'immediate if', 'score': 10},
        {'text': 'Alternative to if-else', 'score': -2},
        {'text': 'If-then-else stateme', 'score': -2},
        {'text': 'None', 'score': -2},
      ],
    },
    {
      'questionText': 'Q7.Which of the following type of a variable is volatile? ?',
      'answers': [
        {'text': 'Mutable variable', 'score': 10},
        {'text': 'Dynamic variable', 'score': -2},
        {'text': 'Volatile variable', 'score': -2},
        {'text': 'Immutable variable', 'score': -2},
      ],
    },
    {
      'questionText': ' Q8: The property in CSS used to change the background color of an element is -?',
      'answers': [
        {'text': 'background-color', 'score': 10},
        {'text': 'color', 'score': -2},
        {'text': 'background-color', 'score': -2},
        {'text': 'All of the above', 'score': -2},
      ],
    },
    {
      'questionText': 'Q9. he HTML attribute used to define the inline styles is -?',
      'answers': [
        {'text': 'style', 'score': 10},
        {'text': 'styles', 'score': -2},
        {'text': 'class', 'score': -2},
        {'text': 'None', 'score': -2},
      ],
    },
    {
      'questionText': 'Q10. Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow??',
      'answers': [
        {'text': 'p {background-color : #yellow;}', 'score': -2},
        {'text': 'p {background-color : yellow;}', 'score': 10},
        {'text': 'all {background-color : yellow;}', 'score': -2},
        {'text': 'None', 'score': -2},
      ],
    },


  ];

  var _questionIndex = 0;
  var _totalScore = 0;

  void _resetQuiz() {
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  void _answerQuestion(int score) {
    _totalScore += score;

    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
    if (_questionIndex < _questions.length) {
      print('We have more questions!');
    } else {
      print('No more questions!');
    }
  }
  Widget build(BuildContext context) {
    print(_questions[0]['questionText'].toString());
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(30.0),
        child: _questionIndex < _questions.length
            ? Quiz(
          answerQuestion: _answerQuestion,
          questionIndex: _questionIndex,
          questions: _questions,
        ) //Quiz
            : Result(_totalScore, _resetQuiz),
      ),
    ); //Padding
  }
}
