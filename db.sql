PRAGMA foreign_keys=OFF;
CREATE TABLE d1_kv (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE emails (email text PRIMARY KEY,reference text);
INSERT INTO emails VALUES('karley_mohr81@goodpostman.com','ai wpa');
INSERT INTO emails VALUES('brandonfarmer75@outlook.com','ai wpa');
INSERT INTO emails VALUES('parkercatherine622@gmail.com','ai wpa');
INSERT INTO emails VALUES('kenya.dicki87@goodpostman.com','ai wpa');
INSERT INTO emails VALUES('althea_ruecker83@goodpostman.com','ai wpa');
INSERT INTO emails VALUES('name40@mdhmx.com','ai wpa');
INSERT INTO emails VALUES('isobel72@hotmail.com','ai wpa');
INSERT INTO emails VALUES('keithbarrows88@aol.com','ai wpa');
INSERT INTO emails VALUES('ronny62@mdhmx.com','ai wpa');
INSERT INTO emails VALUES('rosalee_treutel29@mdhmx.com','ai wpa');
INSERT INTO emails VALUES('gregnpaj@gmail.com','ai wpa');
INSERT INTO emails VALUES('tsekati15@gmail.com','ai wpa');
INSERT INTO emails VALUES('hola.academiaglobal@gmail.com','ai wpa');
INSERT INTO emails VALUES('rociogv48@gmail.com','ai wpa');
INSERT INTO emails VALUES('alligator@gmail.com','ai wpa');
INSERT INTO emails VALUES('cfristoe1@gmail.com','ai wpa');
INSERT INTO emails VALUES('MoguVin@gmail.com','ai wpa');
INSERT INTO emails VALUES('menajohn25@yandex.com','ai wpa');
INSERT INTO emails VALUES('bournjeremy1@outlook.com','ai wpa');
INSERT INTO emails VALUES('anasssoussi01@gmail.com','ai wpa');
INSERT INTO emails VALUES('yuhan.jiang@sheffield.ac.uk','ai wpa');
INSERT INTO emails VALUES('dovi@kutoff.com','ai wpa');
INSERT INTO emails VALUES('dc@voyauk.com','ai wpa');
INSERT INTO emails VALUES('michael.niotakis@gmail.com','ai wpa');
INSERT INTO emails VALUES('nemoai2019@gmail.com','ai wpa');
INSERT INTO emails VALUES('wl.leroux84@gmail.com','ai wpa');
INSERT INTO emails VALUES('pl_washington@yahoo.com','ai wpa');
INSERT INTO emails VALUES('sanjm@mac.com','ai wpa');
INSERT INTO emails VALUES('sasakiarika@gmail.com','ai wpa');
INSERT INTO emails VALUES('jdeng263@163.com','ai wpa');
CREATE TABLE recruiters (

  id integer PRIMARY KEY AUTOINCREMENT,

  email text NOT NULL,

  message text NOT NULL

);
INSERT INTO recruiters VALUES(3,'adam@gateway.xyz','Hey Chris, your tool (https://www.aiwebpageanalyzer.com) seems awesome in theory, but it failed to run on any site I tried. We''ve been thinking of building a similar tool for internal use. Can you get back to me if you might be interested in taking on the project?');
INSERT INTO recruiters VALUES(4,'abhays797@gmail.com',replace('Hi Chris, I''m Abhay from India. I like to connect with you. \nI''ve just seen your portfolio, this is amazing. I''m exploring in development field. I''ve not so much working experience just few my own projects. If you have any roadmap or suggestions please let me know. It''ll add value in my skills and knowledge.\n\nRegards\nAbhay ','\n',char(10)));
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('recruiters',4);
