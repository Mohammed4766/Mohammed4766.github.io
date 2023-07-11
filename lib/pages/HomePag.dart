// ignore_for_file: prefer_const_constructors, avoid_unnecessary_containers, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';

class HomePag extends StatefulWidget {
  const HomePag({super.key});

  @override
  State<HomePag> createState() => _HomePagState();
}

class _HomePagState extends State<HomePag> {
  double? screeheight;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    screeheight = MediaQuery.of(context).size.height;
    double animatedContainer = screeheight! * 0.5;
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 60, 3, 88),
      body: ListView(
        children: [
          AnimatedContainer(
            duration: Duration(seconds: 3),
            margin: EdgeInsets.all(50),
            height: animatedContainer,
            decoration: BoxDecoration(
              color: Color.fromARGB(255, 244, 158, 234),
              borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(50),
                  topRight: Radius.circular(30),
                  topLeft: Radius.circular(70)),
              boxShadow: [
                BoxShadow(
                    color: const Color.fromARGB(255, 29, 28, 28),
                    blurRadius: 30,
                    offset: Offset(10, 5)),
              ],
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [
                  Color.fromARGB(255, 131, 98, 186),
                  Color.fromARGB(255, 198, 57, 167),
                ],
              ),
            ),
            child: Center(child: Text("jkhubukhjkjbhjk")),
          ),
          MaterialButton(
              child: Text("dat"),
              onPressed: () {
                setState(() {
                  animatedContainer = 100;
                });
              })
        ],
      ),
    );
  }
}
