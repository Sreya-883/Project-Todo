import React, { useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {BsPlusCircle} from 'react-icons/bs';
import { useNavigate,Link } from 'react-router-dom';
function AddTask() {
  let navigate=useNavigate();
  let[err,setErr]=useState("");
let {register,handleSubmit,formState:{errors}}=useForm();
let submitForm=(newTask)=>{
  axios.post("http://localhost:4000/TodoTasks",newTask)
  .then(response=>{
    setErr("")
    alert("Task added Succesfully")
    navigate("/tasklist")
  })
  .catch(error=>{
    setErr(error.message)
  })
 }
  return (
     <div className='text-center  fw-bold ms-3'>
      <h4 className='my-3 text-start'>Add New Task </h4>
       <h6 className='my-3 text-start'>Enter Task Details</h6>
       {err.length!==0&&<p className='text-danger text-center'>{err}</p>}
    <Form className='mt-3' onSubmit={handleSubmit(submitForm)}>
      <Row >
        <Form.Group as={Col} md="3" >
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            {...register("task")}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="2" >
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            {...register("startTime")}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label>End Time</Form.Label>
          <InputGroup>
            <Form.Control
              type="time"
              {...register("endTime")}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" >
          <Form.Label>Category</Form.Label>
          <Form.Select {...register("category")}>
      <option disabled value="DEFAULT">Choose Category</option>
      <option value="Personal">Personal</option>
      <option value="Professional">Professional</option>
      <option value="Other">Other</option>
    </Form.Select>

        </Form.Group>
        <Form.Group as={Col} md="2" >
          <Form.Label>Status</Form.Label>
          <Form.Select {...register("status")}>
      <option disabled value="DEFAULT">Choose Status</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
    </Form.Select>

        </Form.Group>
      <Form.Group as={Col} md="1" >
      <Form.Label>Add Task</Form.Label>
      <br/>
      <button type="submit" className=' .btn border-0 bg-white text-center text-primary fs-4'><BsPlusCircle/></button>
      </Form.Group>
      </Row>
    </Form>
    <br/>
    <button className="btn btn-info text-center" > <Link className='nav-link' to="/TaskList">View Tasks</Link></button>
    <br/>
    <hr/>
    </div>
  );
}
export default AddTask;