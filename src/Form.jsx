import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Body, Headone, Container, FormContent, FormArea, Error, StyleFormContent, Btn } from "./Style";


const Form = () => {

    // creating hooks to show users data in list 
    const [user, setUser] = useState([]);
    const [userID, setUserID] = useState([]);

    const [data, setData] = useState({
        userid: "",
        title: "",
        body: ""
    })



    // fetching api data
    useEffect(() => {
        const fetcData = async () => {

            try {
                const url = "https://jsonplaceholder.typicode.com/users";
                const res = await fetch(url);
                const res_json = await res.json();
                // console.log(res_json);

                const arr = res_json[0].name;
                const arr1 = res_json[1].name;
                const arr2 = res_json[2].name;
                const arr3 = res_json[3].name;
                const arr4 = res_json[4].name;
                const arr5 = res_json[5].name;
                const arr6 = res_json[6].name;
                const arr7 = res_json[7].name;
                const arr8 = res_json[8].name;
                const arr9 = res_json[9].name;

                const id = res_json[0].id;
                const id1 = res_json[1].id;
                const id2 = res_json[2].id;
                const id3 = res_json[3].id;
                const id4 = res_json[4].id;
                const id5 = res_json[5].id;
                const id6 = res_json[6].id;
                const id7 = res_json[7].id;
                const id8 = res_json[8].id;
                const id9 = res_json[9].id;

                const userArr = [arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

                const userID = [id, id1, id2, id3, id4, id5, id6, id7, id8, id9];

                setUser(userArr);
                setUserID(userID);
            } catch (error) {
                console.log(error);
                alert("Error OCCURRED !!!!");
            }
        }

        fetcData();
    });

    const getData = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }



    const submitData = (e) => {
        var selectUser = document.querySelector("#userid").value;
        var title = document.querySelector("#title").value;
        var body = document.querySelector("#body").value;

        if (selectUser == "" || title == "" || body == "") {
            alert("Please Select a Value or Fill all Details");
        } else {
            try {
                const postUrl = "https://jsonplaceholder.typicode.com/posts"
                axios.post(postUrl, {
                    userid: parseInt(data.userid),
                    title: data.title,
                    body: data.body

                }).then(res => {
                    console.log(res.data);
                }).catch (function (err){
                    alert(err);
                })
            }
            catch (e2) {
                console.log(e2);
                alert("Error Occured!!!");
                alert(e2);
            }

        }

    }


    return (
        <>
            <Body>
                <Container>
                    <div>
                        <Headone><h2> Fill the details in the Form</h2></Headone>

                        <FormContent>
                            <form onSubmit={submitData}>

                                <FormArea>
                                    <div>
                                        {!user ? (
                                            <Error>
                                                <div>No Username Found</div>
                                            </Error>

                                        ) : (
                                            <>
                                                <div>
                                                    <div>
                                                        <label htmlFor="user">Select User : </label>

                                                        <select id="userid" name="userid" onChange={getData} required>
                                                            <option value=""></option>
                                                            <option value={userID[0]}>{user[0]}</option>
                                                            <option value={userID[1]}>{user[1]}</option>
                                                            <option value={userID[2]}>{user[2]}</option>
                                                            <option value={userID[3]}>{user[3]}</option>
                                                            <option value={userID[4]}>{user[4]}</option>
                                                            <option value={userID[5]}>{user[5]}</option>
                                                            <option value={userID[6]}>{user[6]}</option>
                                                            <option value={userID[7]}>{user[7]}</option>
                                                            <option value={userID[8]}>{user[8]}</option>
                                                            <option value={userID[9]}>{user[9]}</option>
                                                        </select>

                                                    </div>

                                                    <br />
                                                    <StyleFormContent>
                                                        <div>
                                                            <label htmlFor="title">Title : </label>
                                                            <textarea name="title" id="title" style={{ marginLeft: 1 + "rem" }} onChange={getData}></textarea>
                                                        </div>
                                                    </StyleFormContent>
                                                    <br />
                                                    <StyleFormContent>
                                                        <div>
                                                            <label htmlFor="body">Body : </label>
                                                            <textarea name="body" style={{ marginLeft: 1 + "rem" }} id="body" onChange={getData}></textarea>
                                                        </div>
                                                    </StyleFormContent>
                                                    <br />
                                                    <Btn>
                                                        Submit
                                                    </Btn>

                                                </div>
                                            </>
                                        )}
                                    </div>

                                </FormArea>
                            </form>
                        </FormContent>
                    </div>
                </Container>
            </Body>
        </>
    )
}

export default Form;