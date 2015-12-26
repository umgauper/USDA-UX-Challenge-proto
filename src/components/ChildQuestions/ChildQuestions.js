import React, { PropTypes, Component } from 'react';

class ChildQuestions extends Component {

  render() {
    var j = this.props.j;
    var children = this.props.children;
    var IsStudentFunctions = this.props.IsStudentFunctions;
    var IsFosterFunctions = this.props.IsFosterFunctions;
    var IsMigrantFunctions = this.props.IsMigrantFunctions;

    function MakeArrayOfQuestionsDivs(FunctionsArr, questionEnd) {
      return children.map(function(child, index) {
        var question = `Is ${child.name[0]} ${questionEnd}`;
        var func = FunctionsArr[index];
        return <div><h3>{question}</h3>
          <button onClick={func.yes}>Yes</button>
          <button onClick={func.no}>No</button></div>
      });

    };

    var questionsInputs = [
      [IsStudentFunctions, 'a student at Wheatland Elementary?'],
      [IsFosterFunctions, 'a foster child?'],
      [IsMigrantFunctions, 'a migrant, a runaway, or homeless?']
    ];

    var questions = questionsInputs.reduce(function(prev, cur, index) {
      return prev.concat(MakeArrayOfQuestionsDivs(cur[0], cur[1]))
    }, []);

    return <div>{questions[j]}j:{j}</div>
  }
}

export default ChildQuestions
