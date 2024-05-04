import { useState } from "react";
import "./App.css";
import ThreadComponent from "./components/Thread/Thread";
import Layout from "./components/Layout/Layout";
function App() {
  const [count, setCount] = useState(0);
  // const threads = [
  //   {
  //     subject_id: 10,
  //     question_id: 20,
  //     thread_id: "5ca388e1a59a5a12444ba107",
  //     reply_to: "5cab51c4a59a5a124c196b1d",
  //     text: "fsdfsdf",
  //     created_at: "2019-04-24 07:36:39",
  //     subject: "Pay",
  //     question: "I think I get too little in terms of my experience",
  //     team: "Demo team here.",
  //     id: "5cc01207a59a5a02bc68e007",
  //   },
  //   {
  //     question_id: 20,
  //     subject_id: 10,
  //     score: 9,
  //     thread_id: "5ca388e1a59a5a12444ba107",
  //     text: "wfewef",
  //     created_at: "2019-04-08 13:51:00",
  //     acknowledged: true,
  //     subject: "Pay",
  //     question: "I think I get too little in terms of my experience",
  //     team: "Demo team here.",
  //     id: "5cab51c4a59a5a124c196b1d",
  //   },
  //   {
  //     question_id: 20,
  //     subject_id: 10,
  //     score: 5,
  //     thread_id: "5ca388e1a59a5a12444ba107",
  //     text: "fdsfdsf",
  //     created_at: "2019-04-02 16:08:01",
  //     subject: "Pay",
  //     question: "I think I get too little in terms of my experience",
  //     team: "Demo team here.",
  //     id: "5ca388e1a59a5a12444ba108",
  //   },
  // ];

  // hardcoded for init styling purposes
  const threads = [
    [
      {
        subject_id: 10,
        question_id: 20,
        score: 5, // score missing on the first post
        thread_id: "5ca388e1a59a5a12444ba107",
        reply_to: "5cab51c4a59a5a124c196b1d",
        text: "fsdfsdf",
        created_at: "2019-04-24 07:36:39",
        subject: "Pay",
        question: "I think I get too little in terms of my experience",
        team: "Demo team here.",
        id: "5cc01207a59a5a02bc68e007",
      },
      {
        question_id: 20,
        subject_id: 10,
        score: 9,
        thread_id: "5ca388e1a59a5a12444ba107",
        text: "wfewef",
        created_at: "2019-04-08 13:51:00",
        acknowledged: true,
        subject: "Pay",
        question: "I think I get too little in terms of my experience",
        team: "Demo team here.",
        id: "5cab51c4a59a5a124c196b1d",
      },
      {
        question_id: 20,
        subject_id: 10,
        score: 5,
        thread_id: "5ca388e1a59a5a12444ba107",
        text: "fdsfdsf",
        created_at: "2019-04-02 16:08:01",
        subject: "Pay",
        question: "I think I get too little in terms of my experience",
        team: "Demo team here.",
        id: "5ca388e1a59a5a12444ba108",
      },
    ],
    [
      {
        question_id: 15,
        subject_id: 8,
        score: 10,
        thread_id: "5cbf364ea59a5a4bea15bc44",
        text: "I am very happy!",
        created_at: "2019-04-23 15:59:10",
        subject: "Freedom of action",
        question:
          "I find that my leader gives me the freedom I need to make decisions about the things that lie within my field of work",
        team: "Demo team here.",
        id: "5cbf364ea59a5a4bea15bc45",
      },
    ],
    [
      {
        question_id: 13,
        subject_id: 7,
        score: 8,
        thread_id: "5cab6794a59a5a34d6738306",
        text: "test",
        created_at: "2019-04-23 12:30:35",
        subject: "Support",
        question:
          "I experience I can get the help and guidance in relation to my function and my duties as I need",
        team: "Demo team here.",
        id: "5cbf056ba59a5a076c436eb4",
      },
      {
        question_id: 13,
        subject_id: 7,
        score: 5,
        thread_id: "5cab6794a59a5a34d6738306",
        text: "dobre deee",
        created_at: "2019-04-08 15:24:04",
        subject: "Support",
        question:
          "I experience I can get the help and guidance in relation to my function and my duties as I need",
        team: "Demo team here.",
        id: "5cab6794a59a5a34d6738307",
      },
    ],
    [
      {
        question_id: 17,
        subject_id: 9,
        score: 8,
        thread_id: "5ca38ed7a59a5a1240731e17",
        text: "here is my feedback",
        created_at: "2019-04-18 08:24:56",
        subject: "Feedback",
        question:
          "I experience constructive feedback on my work efforts that I can use in my further work",
        team: "Demo team here.",
        id: "5cb83458a59a5a02bc68e004",
      },
      {
        question_id: 17,
        subject_id: 9,
        score: 5,
        thread_id: "5ca38ed7a59a5a1240731e17",
        text: "dfgsdf",
        created_at: "2019-04-02 16:33:27",
        subject: "Feedback",
        question:
          "I experience constructive feedback on my work efforts that I can use in my further work",
        team: "Demo team here.",
        id: "5ca38ed7a59a5a1240731e18",
      },
    ],
    [
      {
        question_id: 16,
        subject_id: 9,
        score: 5,
        thread_id: "5cab678ca59a5a3a2e3b99a4",
        text: "ljsnvldfvd",
        created_at: "2019-04-08 15:23:56",
        subject: "Feedback",
        question:
          "I experience praise for my efforts and achievement of my immediate leader when I have done a particularly good job",
        team: "Demo team here.",
        id: "5cab678ca59a5a3a2e3b99a5",
      },
    ],
    [
      {
        question_id: 22,
        subject_id: 10,
        score: 7,
        thread_id: "5cab6788a59a5a124b41d3cf",
        text: "evala",
        created_at: "2019-04-08 15:23:52",
        subject: "Pay",
        question:
          "I do not think the degree of responsibility is reflected in my salary level",
        team: "Demo team here.",
        id: "5cab6788a59a5a124b41d3d0",
      },
    ],
    [
      {
        question_id: 21,
        subject_id: 10,
        score: 6,
        thread_id: "5cab6785a59a5a30bf78d80a",
        text: "bla bla",
        created_at: "2019-04-08 15:23:49",
        subject: "Pay",
        question: "I have not risen enough in relation to my seniority",
        team: "Demo team here.",
        id: "5cab6785a59a5a30bf78d80b",
      },
    ],
    [
      {
        question_id: 23,
        subject_id: 10,
        score: 8,
        thread_id: "5cab51bfa59a5a12444ba110",
        text: "tsveti test comment",
        created_at: "2019-04-08 15:23:44",
        subject: "Pay",
        question:
          "How important will you consider your salary for your overall satisfaction at work",
        team: "Demo team here.",
        id: "5cab6780a59a5a124928fc37",
      },
      {
        question_id: 23,
        subject_id: 10,
        score: 5,
        thread_id: "5cab51bfa59a5a12444ba110",
        text: "fsfsdf",
        created_at: "2019-04-08 13:50:55",
        subject: "Pay",
        question:
          "How important will you consider your salary for your overall satisfaction at work",
        team: "Demo team here.",
        id: "5cab51bfa59a5a12444ba111",
      },
    ],
    [
      {
        question_id: 2,
        subject_id: 5,
        score: 9,
        thread_id: "5cab51c2a59a5a15555943ed",
        text: "wefwef",
        created_at: "2019-04-08 13:50:58",
        subject: "Wellbeing",
        question: "I have been happy and in a good mood",
        team: "Demo team here.",
        id: "5cab51c2a59a5a15555943ee",
      },
    ],
  ];

  return (
    <>
      {/* <Layout> */}
      {threads.map((thread, index) => (
        <ThreadComponent key={index} threads={thread} />
      ))}
      {/* <ThreadComponent threads={threads} />
      <ThreadComponent threads={threads} /> */}
      {/* </Layout> */}
    </>
  );
}

export default App;
