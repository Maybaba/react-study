import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //입력 칸에 있는 3개의 값을 상태값으로 관리
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [date, setDate] = useState(null);

    //입력칸에 있는 3개의 값을 하나의 상태값으로 관리
    const [userInput, setUserInput] = useState({
        title: '',
        price:'',
        date:''
    });

    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    //제목이 입력되었을 때 발생하는 이벤트 핸들러
    const titleChangeHandler = e => {


        //순서대로 진행되지 않을 때, 순서가보장되지 않을 때 함수 업데이트를 사용하여서 비동기처럼
        //함수를 활용한다. 그 함수로 시간이나 순서를 보장하게 세팅한다.
        // setUserInput(prevUserInput =>( {
        //     ...userInput,
        //     title : '메롱메롱'
        // }));

        // setUserInput({
        //     ...userInput,
        //     title : '하이이이이잉이ㅣ이이이'
        // });

        // userInput.title = e.target.value;(x)

        //객체나 배열상태로 관리되는 상태값은
        //상태변경 시 새로운 객체나 배열을 setter에 전달해야 함
        setUserInput({
            ...userInput,
            title:e.target.value,
        });
    };
    //가격이 입력되었을 때 발생하는 이벤트 핸들러
    const priceChangeHandler = e => {
        setUserInput({
            ...userInput,
            price:+e.target.value,
        });
    };
    //날짜 입력되었을 때 발생하는 이벤트 핸들러
    const dateChangeHandler = e => {
        setUserInput({
            ...userInput,
            date: e.target.value
        });
    };

    //폼 전송 이벤트 핸들러
    const submitHandler = e => {
        e.preventDefault(); //새로고침 (폼 전송 ) 방지
        console.log('폼이 전송됨 !');

        //지출 내역 객체 생성
        // const newExpense = {
        //     title , //원래는 돔을 잡아와서 값을 낸다.
        //     price,
        //     date
        // };
        console.log(userInput);

        //form input 다시 빈칸으로 두는 법
        setUserInput({
            title:'',
            price:'',
            date:''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                           onChange={titleChangeHandler}
                            value={userInput.title}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="100"
                        step="100"
                        onChange={priceChangeHandler}
                        value={userInput.price}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max={getTodayDate()}
                        onChange={dateChangeHandler}
                        value={userInput.date}

                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
