import React from 'react';

import styles from './EventForm.module.scss';
import { Form, useNavigate } from 'react-router-dom';

  const EventForm = ({ method, event={} }) => {

    const {
      title: title,
      desc: description,
      'imageUrl': image,
      'start-date': date
    } = event;
  
    // 날짜 형식을 변경 (yyyy-MM-dd)
    /**
     * 
     * @param date - yyyy년 MM월 dd일
     */
    const convertDateFormat = (date) => {
      const [yearPart, monthDayPart] = date.split('년 ');
      const [monthPart, dayPart] = monthDayPart.split('월 ');
  
      const day = dayPart.replace('일', '');
  
      // console.log('date: ', { yearPart, monthPart, day });
  
      return `${yearPart}-${monthPart}-${day}`;
    };
  
    let formatDate;
    if(event.date) {
    const formatDate = convertDateFormat(date);
  };
  
  
    // const { eventId: id } = useParams();
    const navigate = useNavigate();
  
    const cancelHandler = (e) => {
      // window.location.href = '/events/' + id;
      // navigate('/events/' + id);
      navigate('..');
    };

    return (
      <Form 
      method={method}
      className={styles.form} 
      // onSubmit={submitHandler} 
      noValidate
      >
        <p>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            required
            defaultValue={event ? title : ''}
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="url"
            name="image"
            required
            defaultValue={event ? image : ''}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            required
            defaultValue={event ? formatDate : ''}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            required
            defaultValue={event ? description : ''}
          />
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button>{method === 'post' ? 'Save' : 'Modify'}</button>
        </div>
      </Form>
    );
  };
  
  export default EventForm;
  
  // 서버에 갱신요청을 보내는 트리거함수
// app.js 에서 router에 설정
export const action = async ({ request, params }) => {
  //자동으로 되지 않고, save가 눌러질 때 트리거 되게 해야함
  //action 함수를 트리거하는 방법
  //form이 있는 eventForm으로 이동
  console.log('action 함수 call ! ');

  console.log('req: ', context);

  //서버에서 입력한 데이터 읽어오기 - contextapram 의 form 데이터 갖고오기 
  // console.log('abc:',abc);

  //requestparam의 값을 가져오기 
  const formData = await request.formData();
  console.log(formData);

        //서버에 보낼 데이터
      const payload = {
        title: formData.get('title'),
        desc: formData.get('descriction'),
        imgUrl: formData.get('image'),
        beginDate: formData.get('date') 
      }

      console.log(payload);
    
      let url = `http://localhost:8282/events`;
      if(request.method === 'PATCH') {
        url += `/${params.eventId}`;
      }

      console.log('info: ', {url, method : request.method});

  // const response = await fetch(url, {
  //   method: request.method, // 값 받아와서 메서드를 직접 읽기
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(payload),
  // });

  // return redirect('/events');

};