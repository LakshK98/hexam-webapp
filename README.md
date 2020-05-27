# HEXAM-BACKEND

instruction<br>
install node<br>
npm install -y<br>
run a mysql server <br>

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hexamdb'
    
    
CREATE TABLE `teachers` (<br>
  `email` varchar(255) NOT NULL,<br>
  `pass` varchar(255) NOT NULL<br>
)

CREATE TABLE `tests` (<br>
  `title` varchar(255) NOT NULL,<br>
  `description` text NOT NULL,<br>
  `duration` int(11) NOT NULL,<br>
  `start` varchar(255) NOT NULL,<br>
  `end` varchar(255) NOT NULL,<br>
  `date` varchar(255) NOT NULL,<br>
  `id` int(11) NOT NULL<br>
) 
<br>

CREATE TABLE `reports` (<br>
  `tab_switches` int(11) NOT NULL,<br>
  `face_suspicion` int(11) NOT NULL,<br>
  `eye_suspicion` int(11) NOT NULL,<br>
  `student_email` varchar(255) NOT NULL,<br>
  `test_id` int(11) NOT NULL<br>
) 
<br>

CREATE TABLE `students` (<br>
  `email` varchar(255) NOT NULL,<br>
  `name` varchar(255) NOT NULL,<br>
  `imgpath` int(11) NOT NULL<br>
)



go to http://localhost:3000/<br>
