
        function myFunction() {
           
             var sec1 = document.createElement("section");
             var sec2 = document.createElement("section");
             var sec3 = document.createElement("section");
             var sec4 = document.createElement("section");
             var sec5 = document.createElement("section");
             var sec6 = document.createElement("section");
             
            function mySection(sec, hyt, bgcolor, jcontent, bgimage) {
                sec.style.boxSizing = "border-box";
                sec.style.width = "100%";
                sec.style.alignItems = "center";
                sec.style.padding = "10px";
                sec.style.display = "flex";
                sec3.style.display = "block";
                sec4.style.display = "block";
                sec.style.justifyContent = jcontent;
                sec.style.height = hyt;
                sec.style.backgroundColor = bgcolor;
                sec.style.backgroundImage = bgimage;
                document.body.appendChild(sec);
            }
            
            //section func call
             mySection(sec1, "10vh", "#579532", "space-between");
             mySection(sec2, "90vh", "", "left", "url('4.jpg')");
             mySection(sec3, "", "", "right");
             document.body.appendChild( document.createElement('hr'));
             mySection(sec4, "",);
             mySection(sec5, "", "", "center");
             mySection(sec6, "", "#579532", "right");

            //logo sec1
            var logo = document.createElement("div");
            logo.innerHTML = "<h1>M.P.S.SCHOOL</h1>";
            logo.style.textShadow = "2px 2px tomato";
            logo.style.marginLeft = "120px";
            logo.style.cursor="pointer";
            sec1.appendChild(logo);

            //ul....sec1
            var list = document.createElement("ul");
            list.style.fontSize = "20px";
            list.style.textTransform = "uppercase";
            list.style.color = "white";
            list.style.display = "inline-flex";
            sec1.appendChild(list);

            // //li....
            const item = ['Home', 'About', 'Courses', 'Contact'];
            item.map((value) => {
                var li = document.createElement("li");
                li.innerHTML = value;
                li.style.width = "120px";
                li.style.cursor="pointer";
                li.style.padding = "15px 10px";
                li.style.margin = "20px";
                li.style.textAlign = "center";
                li.style.borderRadius = "10px";
                li.style.listStyleType = "none";
                list.appendChild(li);
            });
            // //Form sec2
            var form = document.createElement("form");
            form.style.boxSizing = "border-box";
            form.style.width = "40%";
            form.style.padding = "40px";
            form.style.marginTop = "45px";
            form.style.marginLeft = "10%";
            form.style.borderRadius = "10px";
            form.style.boxShadow = "0 0 10px 10px #579532";
            sec2.appendChild(form);

            const value = ['Enter Name', 'Enter Email', 'Enter Phone'];
            let btn = document.createElement("button");
            for (let i = 0; i <= 2; i++) {
                var inputt = document.createElement("input");
                function myInput(input, wdth) {
                    input.setAttribute("placeholder", value[i])
                    input.style.width = wdth;
                    input.style.padding = "10px";
                    input.style.margin = "5px auto";
                    input.style.color = "#1C4A00";
                    input.style.fontSize = "20px";
                    input.style.borderRadius = "10px";
                    input.style.border = "none";
                    input.style.backgroundColor = "#80BA5D";
                    btn.innerHTML = "Submit"
                    form.appendChild(input, btn);
                }
                myInput(inputt, '80%');
            }
            myInput(btn);

            // /////////////////////////////
            // btn.addEventListener("click",()=>{
            //     if(null==inputt.value || inputt.value==undefined){
            //         alert("Please Fill The Value");
            //     }
            // })

            // //sec3
            // //heading
            var hdsec3 = document.createElement("h1");
            var hdsec4 = document.createElement("h1");
            function myTitle(hd, htxt, sec) {
                hd.innerHTML = htxt;
                hd.style.textAlign = "center";
                hd.style.fontSize = "40px";
                hd.style.fontWeight = "lighter";
                hd.style.color = "#1C4A00";
                hd.style.marginTop = "90px";
                sec.appendChild(hd)
            }
            myTitle(hdsec3, "Our Campus", sec3)
            myTitle(hdsec4, "Streams", sec4)
            //row
            var row1 = document.createElement("div");
            var row2 = document.createElement("div");
            function myRow(row, sec) {
                row.style.width = "80%";
                row.style.margin = "20px auto";
                row.style.padding = "20px";
                row.style.display = "flex";
                row.style.justifyContent = "space-around";
                sec.appendChild(row);
            }
            myRow(row1, sec3);
            myRow(row2, sec4);

            //col
            var col1 = document.createElement("div");
            var col2 = document.createElement("div");
            var col3 = document.createElement("div");
            var col4 = document.createElement("div");
            var col5 = document.createElement("div");
            var col6 = document.createElement("div");
            function myCol(col, row) {
                //     col.innerHTML = name;
                col.style.textAlign = "center";
                col.style.flexBasis = "33%";
                col.style.fontSize = "20px";
                col.style.padding = "10px";
                col.style.margin = "20px";
                col.style.color = "grey";
                col.style.borderRadius = "10px";
                col.style.boxSizing = "border-box"
                col.style.boxShadow = "0 0 10px 10px #579532";
                row.appendChild(col);
            }
            myCol(col1, row1);
            myCol(col2, row1);
            myCol(col3, row1);
            myCol(col4, row2);
            myCol(col5, row2);
            myCol(col6, row2);

            //images sec3
            var image1 = document.createElement("img");
            var image2 = document.createElement("img");
            var image3 = document.createElement("img");
            function myImage(image, source, col) {
                image.setAttribute('src', source);
                image.setAttribute('height', '100%');
                image.setAttribute('width', '100%');
                image.style.cursor = "pointer";
                col.appendChild(image);
            }
            myImage(image1, "school1.jpg", col1);
            myImage(image2, "school2.jpg", col2);
            myImage(image3, "school5.jpg", col3);
          
            //sec4 
            var Heading1 = document.createElement("h2");
            var Heading2 = document.createElement("h2");
            var Heading3 = document.createElement("h2");
            function myHeading(heading, title, col) {
                heading.innerHTML = title;
                heading.style.color = "green";
                col.appendChild(heading)

            }
            myHeading(Heading1, 'Science', col4);
            myHeading(Heading2, 'Commerce', col5);
            myHeading(Heading3, 'Art', col6);

            var ptxt = "Choosing a stream of subjects for Class 11 and 12 is the first of many big career decisions you will be making in your life. After having studied a variety of subjects for your entire school career, the time has come to select a specific stream that suits your interests, capabilities and career goals."

            var para1 = document.createElement("h5");
            var para2 = document.createElement("h5");
            var para3 = document.createElement("h5");
            function myPara(para, ptxt, col) {
                para.innerHTML = ptxt;
                col.appendChild(para);
            }
            myPara(para1, ptxt, col4);
            myPara(para2, ptxt, col5);
            myPara(para3, ptxt, col6);

            //sec5
            var ifram = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28383.83937657889!2d78.21901178634985!3d27.219780161748176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397468eeec83732f%3A0x5a73180a17478625!2sTundla%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1640345863925!5m2!1sen!2sin";

            var mapDiv = document.createElement("iframe");
            mapDiv.setAttribute("src", ifram);
            mapDiv.style.width = '100%';
            mapDiv.style.height = '500px';
            sec5.appendChild(mapDiv);

            // footer div.. sec6
            var footerDiv = document.createElement("div");
            footerDiv.innerHTML = "<p>Suneel@copyright...</p>"; footerDiv.style.fontSize = "25px"; footerDiv.style.letterSpacing = "1px";footerDiv.style.color = "white";footerDiv.style.textAlign = "right";footerDiv.style.marginRight = "30px";
            sec6.appendChild(footerDiv);
        }