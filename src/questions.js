import React, { Component } from 'react';

export default class QuestionList extends React.Component {
    render() {
        const { dataSource } = this.props;
        console.log(dataSource, "datSource");
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{justifyContent: 'center',marginTop: '40px', border: '1px solid blue', height: '70vh', width: '85%', padding:'2px'}}>
                    <div style={{border: '1px solid green', padding: '15px', flexDirection: 'row'}}>                        
                        {
                            dataSource.map((question, index) => 
                                (
                                    <div key={index} style={{border: '1px solid red', padding: '15px',marginBottom: '10px', textAlign: '-webkit-left'}}>
                                        <span>{index+1} </span>
                                        {question.questionText}
                                            {
                                                question.choices.map((choice, index) => (
                                                    <div>
                                                        {index+1} {choice}
                                                    </div>
                                                ))
                                            }
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}