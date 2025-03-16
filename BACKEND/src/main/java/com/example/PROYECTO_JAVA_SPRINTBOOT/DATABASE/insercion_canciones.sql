USE NekoSound;

INSERT INTO
    generos (nombre)
VALUES
    ('Latino'),
    ('Pop'),
    ('Rock'),
    ('Metal'),
    ('Romanticas');

SELECT
    *
FROM
    nekosound.generos;

INSERT INTO nekosound.artistas (nombre, id_genero, pais)  
VALUES  
    ('Madonna Louise', 2, 'Estados Unidos'),  -- Pop  
    ('Aerosmith', 3, 'Estados Unidos'),  -- Rock  
    ('Bad Religion', 4, 'Estados Unidos'),  -- metal
    ('Billie Eilish', 2, 'Estados Unidos'),  -- Pop  
    ('Die Antwoord', 2, 'Sudáfrica'),  -- Pop  
    ('Eminem', 2, 'Estados Unidos'),  -- Pop  
    ('Farruko', 1, 'Puerto Rico'),  -- Latino  
    ('Ghost', 4, 'Suecia'),  -- Metal  
    ('Gorillaz', 3, 'Reino Unido'),  -- Rock  
    ('Héctor Lavoe', 1, 'Puerto Rico'),  -- Latino  
    ('Imagine Dragons', 3, 'Estados Unidos'),  -- Rock  
    ('Linkin Park', 3, 'Estados Unidos'),  -- Rock  
    ('LP (Laura Pergolizzi)', 2, 'Estados Unidos'),  -- Pop  
    ('Maná', 3, 'México'),  -- Rock  
    ('Manuel Turizo', 1, 'Colombia'),  -- Latino  
    ('Morat', 5, 'Colombia'),  -- Latino  
    ('Paramore', 3, 'Estados Unidos'),  -- Rock  
    ('Romeo Santos', 5, 'Estados Unidos'),  -- Románticas  
    ('Taylor Swift', 2, 'Estados Unidos'),  -- Pop  
    ('The Animals', 3, 'Reino Unido'),  -- Rock  
    ('Radiohead', 3, 'Reino Unido'),  -- Rock  
    ('The Rolling Stones', 3, 'Reino Unido'),  -- Rock  
     ('The People', 2, 'Los Angeles');  -- Rock  


SELECT * FROM nekosound.artistas;

SELECT * FROM nekosound.albumes;
INSERT INTO nekosound.albumes (titulo, id_artista, fecha_lanzamiento, imagen)  
VALUES  
    ('Like a Virgin', 1, '1984-11-12', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742063624/madona_cbogxe.jpg'),  -- Madonna  
    ('Toys in the Attic', 2, '1975-04-08', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742063845/folder_znzkqc.jpg'),  -- Aerosmith  
    ('Suffer', 3, '1988-09-08', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742063979/Christmas_Songs-min_aw2goj.jpg'),  -- Bad Religion  
    ('WHEN WE ALL FALL ASLEEP', 4, '2019-03-29', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064060/folder_pjc5ed.png'),  -- Billie Eilish  
    ('TEN$ION', 5, '2012-02-07', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064237/R-3370494-1425121634-8163_mjbzfh.jpg'),  -- Die Antwoord  
    ('The Eminem Show', 6, '2002-05-26', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064336/folder_n60may.jpg'),  -- Eminem  
    ('Visionary', 7, '2021-10-01', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064472/36899864271_01c03b8a1b_z_goasj9.jpg'),  -- Farruko  
    ('Impera', 8, '2022-03-11', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064553/0x1900-000000-80-0-0_ihqwre.jpg'),  -- Ghost  
    ('Demon Days', 9, '2005-05-11', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064631/gorillaz-cracker-island_lbxiau.jpg'),  -- Gorillaz  
    ('Comedia', 10, '1978-01-01', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064761/0x1900-000000-80-0-0_gy1qmy.jpg'),  -- Héctor Lavoe  
    ('Night Visions', 11, '2012-09-04', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742064889/0x1900-000000-80-0-0_1_fklitl.jpg'),  -- Imagine Dragons  
    ('Hybrid Theory', 12, '2000-10-24', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065028/Minutes_to_Midnight_cover_pjr8co.jpg'),  -- Linkin Park  
    ('Lost on You', 13, '2016-12-09', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065110/0x1900-000000-80-0-0_hd1u4r.jpg'),  -- LP (Laura Pergolizzi)  
    ('mana', 14, '1992-10-27', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065215/0x1900-000000-80-0-0_1_c5lc8y.jpg'),  -- Maná  
    ('ADN', 15, '2019-08-23', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065293/unnamed_y0rexq.jpg'),  -- Manuel Turizo  
    ('Balas Perdidas', 16, '2018-10-26', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065338/folder_btpcep.jpg'),  -- Morat  
    ('Riot!', 17, '2007-06-12', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065405/Cover_j4c6mv.jpg'),  -- Paramore  
    ('Fórmula, Vol. 1', 18, '2011-11-08', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065490/0x1900-000000-80-0-0_poiock.jpg'),  -- Romeo Santos  
    ('Evermore', 19, '2014-10-27', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065554/Cover_woesjx.jpg'),  -- Taylor Swift  
    ('The Animals', 20, '1964-11-01', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065621/folder_uqv43t.jpg'),  -- The Animals  
    ('OK Computer', 21, '1997-05-21', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065692/Front_yhq1b1.jpg'),  -- Radiohead  
    ('Sticky Fingers', 22, '1971-04-23', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065963/The-Rolling-Stones-Out-Of-Our-Heads-US-album-cover-820-820x820_gm1usn.jpg'),  -- The Rolling Stones  
   ('Torches', 23, '2010-05-10', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742065804/foster-the-people-pic-2024_lulbmw.jpg'); -- the people

SELECT * FROM nekosound.canciones ;

-- Madonna - Like a Virgin
INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
      
    ('Material Girl', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061339/02._United_Rhythms_Of_Brazil_-_Material_Girl_tydq7b.flac', '', ''),  
    ('Live to Tell', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061355/03._Nova_Bossa_Ltd._-_Live_to_Tell_zw7ccw.flac', '', ''),  
    ('Into the Groove', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061347/04._Banda_Do_Sul_Feat._Natascha_-_Into_the_Groove_tupze4.flac', '', ''),  
    ('Hollywood', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061335/05._Glambeats_Corp._-_Hollywood_srglyo.flac', '', ''),  
    ('Like a Virgin', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061356/06._Brazil_XXI_Feat._Silvinha_Santana_-_Like_a_Virgin_z1gdhs.flac', '', ''),  
    ('Lucky Star', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061343/07._Jingo_-_Lucky_Star_jibrom.flac', '', ''),  
    ('Holiday', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061359/08._Sao_Vicente_Feat._Natalie_Renoir_-_Holiday_vkso4c.flac', '', ''),  
    ('Ray of Light', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061358/09._Deise_Costa_Os_Digitalistas_-_Ray_of_Light_vlyons.flac', '', ''),  
    ('Hung Up', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061363/10._Groove_Da_Praia_-_Hung_Up_erccak.flac', '', ''),  
    ('Express Yourself', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061358/11._Amazonics_-_Express_Yourself_meggv6.flac', '', ''),  
    ('Vogue', 1, 1, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061355/12._Sixth_Finger_Feat._Maira_Zoca_-_Vogue_visifx.flac', '', '');
       

 -- Aerosmith - Toys in the Attic  
INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
  
    ('Make It', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997826/01._Make_It_ex6lmq.flac', '', ''),  
    ('Somebody', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997829/02._Somebody_osnd2u.flac', '', ''),  
    ('Dream On', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997836/03._Dream_On_jlyjdr.flac', '', ''),  
    ('One Way Street', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997860/04._One_Way_Street_cucr1r.flac', '', ''),  
    ('Mama Kin', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997850/05._Mama_Kin_uhkqu4.flac', '', ''),  
    ('Write Me A Letter', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997841/06._Write_Me_A_Letter_um3vhs.flac', '', ''),  
    ('Movin Out', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997845/07._Movin_Out_m59ecl.flac', '', ''),  
    ('Walkin The Dog', 2, 2, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997841/08._Walkin_The_Dog_hbxwls.flac', '', '');

 -- Bad Religion - Suffer  
INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
   
    ('Chaos From Within', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060832/01._Chaos_From_Within_fwrkvo.mp3', '', ''),  
    ('My Sanity', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060836/02._My_Sanity_a5k01u.mp3', '', ''),  
    ('Do the Paranoid Style', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060839/03._Do_the_Paranoid_Style_q8qf73.mp3', '', ''),  
    ('The Approach', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060849/04._The_Approach_ypckog.mp3', '', ''),  
    ('Lose Your Head', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060841/05._Lose_Your_Head_nbhgyg.mp3', '', ''),  
    ('End of History', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060844/06._End_of_History_u61e5y.mp3', '', ''),  
    ('Age of Unreason', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060839/07._Age_of_Unreason_oyiniy.mp3', '', ''),  
    ('Candidate', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060846/08._Candidate_kx6reu.mp3', '', ''),  
    ('Faces of Grief', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060845/09._Faces_of_Grief_dgsmm1.mp3', '', ''),  
    ('Old Regime', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060846/10._Old_Regime_qkbhch.mp3', '', ''),  
    ('Big Black Dog', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060850/11._Big_Black_Dog_dnv0p0.mp3', '', ''),  
    ('Downfall', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060852/12._Downfall_qkmv7m.mp3', '', ''),  
    ('Since Now', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060851/13._Since_Now_wjviyc.mp3', '', ''),  
    ('What Tomorrow Brings', 3, 3, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060852/14._What_Tomorrow_Brings_bby6ud.mp3', '', '');
  

    -- Billie Eilish - WHEN WE ALL FALL ASLEEP  
    INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
    ('Watch', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839750/01.-Watch_wtqmwl.mp3', '', ''),  
    ('Everything I Wanted', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839752/02.-Everything_I_Wanted_gyja8y.mp3', '', ''),  
    ('Lovely', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839753/03.-Lovely_rfyphc.mp3', '', ''),  
    ('Bad Guy', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839760/04.-Bad_Guy_g0cvnu.mp3', '', ''),  
    ('Six Feet Under', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839765/05.-Six_Feet_Under_pv00m0.mp3', '', ''),  
    ('Six Feet Under Aire Atlantica Remix', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839754/06.-Six_Feet_Under_Aire_Atlantica_Remix_es1bjh.mp3', '', ''),  
    ('Bored', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839759/07.-Bored_wco8qm.mp3', '', ''),  
    ('My Boy', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839772/08.-My_Boy_s0lk5c.mp3', '', ''),  
    ('Come Out And Play', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839779/09.-Come_Out_And_Play_fdpumn.mp3', '', ''),  
    ('Bad Guy With Justin Bieber', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839776/10.-Bad_Guy_With_Justin_Bieber_b5dbnk.mp3', '', ''),  
    ('Xanny', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839782/11.-Xanny_tf1ejc.mp3', '', ''),  
    ('Bellyache', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839778/12.-Bellyache_sjvgox.mp3', '', ''),  
    ('Burn', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839772/13.-_Burn_mzz4xb.mp3', '', ''),  
    ('Idontwannabeyouanymore', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839793/14.-Idontwannabeyouanymore_hhfgqb.mp3', '', ''),  
    ('You Should See Me In A Crown', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839785/15.-You_Should_See_Me_In_A_Crown_grtjok.mp3', '', ''),  
    ('All The Good Girls Go To Hell', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839791/16.-All_The_Good_Girls_Go_To_Hell_eda4yq.mp3', '', ''),  
    ('Bitches Broken Hearts', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839792/17.-Bitches_Broken_Hearts_aefb0u.mp3', '', ''),  
    ('Party Favor', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839791/18.-Party_Favor_jyvotw.mp3', '', ''),  
    ('Wish You Were Gay', 4, 4, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839795/19.-Wish_You_Were_Gay_rwb9uu.mp3', '', '');

    -- Die Antwoord - TEN$ION  
    INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
     ('In Your Face', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060570/01._Die_Antwoord_-_In_Your_Face_n3fhx2.flac', '', ''),  
    ('Whatever Man (skit)', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060513/02._Die_Antwoord_-_Whatever_Man_skit_vlhk90.flac', '', ''),  
    ('Enter The Ninja', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060625/03._Die_Antwoord_-_Enter_The_Ninja_wffbn3.flac', '', ''),  
    ('Wat Kyk Jy', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060583/04._Die_Antwoord_-_Wat_Kyk_Jy_ceu1jn.flac', '', ''),  
    ('Evil Boy', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060584/05._Die_Antwoord_-_Evil_Boy_uapnih.flac', '', ''),  
    ('Wat Pomp', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060578/06._Die_Antwoord_-_Wat_Pomp_pmxlkw.flac', '', ''),  
    ('Rich Bitch', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060578/06._Die_Antwoord_-_Wat_Pomp_pmxlkw.flac', '', ''),  
    ('Liewe Maatjies', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060599/08._Die_Antwoord_-_Liewe_Maatjies_y2bw2k.flac', '', ''),  
    ('Wie Maakie Jol Vol', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060622/09._Die_Antwoord_-_Wie_Maakie_Jol_Vol_ioqrop.flac', '', ''),  
    ('My Best Friend (skit)', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060554/10._Die_Antwoord_-_My_Best_Friend_skit_f3vbrm.flac', '', ''),  
    ('Fish Paste', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060614/11._Die_Antwoord_-_Fish_Paste_rchzb3.flac', '', ''),  
    ('Copie', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060587/12._Die_Antwoord_-_copie_ru5xlv.flac', '', ''),  
    ('Beat Boy', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060636/13._Die_Antwoord_-_Beat_Boy_e9ekms.flac', '', ''),  
    ('Pretty Woman (skit)', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060589/14._Die_Antwoord_-_Pretty_Woman_skit_ge6aay.flac', '', ''),  
    ('She Makes Me a Killer', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060640/15._Die_Antwoord_-_She_Makes_Me_a_Killer_ngjr1x.flac', '', ''),  
    ('Doos Dronk', 5, 5, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060644/16._Die_Antwoord_-_Doos_Dronk_yqdliq.flac', '', '');
   

     -- Eminem - The Eminem Show 
INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
  
    ('Curtains Up (skit)', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060333/01._Curtains_Up_skit_p59dfc.flac', '', ''),  
    ('White America', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060436/02._White_America_yrvqyr.flac', '', ''),  
    ('Business', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060432/03._Business_gvmaqk.flac', '', ''),  
    ('Cleanin Out My Closet', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060436/04._Cleanin_Out_My_Closet_tqkjbl.flac', '', ''),  
    ('Square Dance', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060452/05._Square_Dance_mxnoay.flac', '', ''),  
    ('The Kiss skit', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060338/06._The_Kiss_skit_sejfr4.flac', '', ''),  
    ('Soldier', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060430/07._Soldier_nnofgp.flac', '', ''),  
    ('Say Goodbye Hollywood', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060449/08._Say_Goodbye_Hollywood_ull488.flac', '', ''),  
    ('Drips', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060455/09._Drips_mi2omq.flac', '', ''),  
    ('Without Me', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060452/10._Without_Me_mzfmih.flac', '', ''),  
    ('Paul Rosenberg skit', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060373/11._Paul_Rosenberg_skit_fbrdek.flac', '', ''),  
    ('Sing for the Moment', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060473/12._Sing_for_the_Moment_yp4osb.flac', '', ''),  
    ('Superman', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060476/13._Superman_ckutse.flac', '', ''),  
    ('Hailie''s Song', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060451/14._Hailie_s_Song_azeokg.flac', '', ''),  
    ('Steve Berman skit', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060390/15._Steve_Berman_skit_vabkzc.flac', '', ''),  
    ('When the Music Stops', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060464/16._When_the_Music_Stops_k5r6ei.flac', '', ''),  
    ('Say What You', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060469/17._Say_What_You_Say_crbb1w.flac', '', ''),  
    ('Till I Collapse', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060478/18._Till_I_Collapse_gmjtva.flac', '', ''),  
    ('My Dad''s Gone Crazy', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060474/19._My_Dad_s_Gone_Crazy_hecnqg.flac', '', ''),  
    ('Curtains Close skit', 6, 6, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060410/20._Curtains_Close_skit_ra73xi.flac', '', '');
   

    -- Farruko - Visionary  
    INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
('La Cartera', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060875/01_La_Cartera_egrbhp.mp3', '', ''),  
('GangaXtrip', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060874/02_GangaXtrip_vptn3t.mp3', '', ''),  
('Borinquen Bella feat. Zion Len', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060878/03_Borinquen_Bella_feat._Zion_Len_luk3z4.mp3', '', ''),  
('Pórtate Mal', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060884/04_P%C3%B3rtate_Mal_lyks32.mp3', '', ''),  
('Playa', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060885/05_Playa_stqpet.mp3', '', ''),  
('Calma Alicia Remix', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060895/06_Calma_Alicia_Remix_etlop6.mp3', '', ''),  
('Delincuente', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060900/07_Delincuente_diomyk.mp3', '', ''),  
('Sorpresa', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060886/08_Sorpresa_iaru3x.mp3', '', ''),  
('Tensión', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060893/09_Tensi%C3%B3n_pn7hjo.mp3', '', ''),  
('Resort', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060901/10_Resort_rl549i.mp3', '', ''),  
('Roatán', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060901/11_Roat%C3%A1n_fwrjzt.mp3', '', ''),  
('Cartier', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060900/12_Cartier_s4d3hg.mp3', '', ''),  
('Quédate', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060905/13_Qu%C3%A9date_rd1d6x.mp3', '', ''),  
('Mucho Humo', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060910/14_Mucho_Humo_cuc4fw.mp3', '', ''),  
('Dale Dembow', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060914/15_Dale_Dembow_bdd0rh.mp3', '', ''),  
('Deidad', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060924/16_Deidad_epg2ej.mp3', '', ''),  
('Rompe el Suelo', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060922/17_Rompe_el_Suelo_t1uhh2.mp3', '', ''),  
('Coolant Remix', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060925/18_Coolant_Remix_uijd6z.mp3', '', ''),  
('Ponle', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060922/19_Ponle_e8lpp6.mp3', '', ''),  
('Inolvidable', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060936/20_Inolvidable_m0rgmy.mp3', '', ''),  
('Nadie', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060933/21_Nadie_mr6gdo.mp3', '', ''),  
('Calma Remix', 7, 7, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060934/22_Calma_Remix_j6ckje.mp3', '', '');


 
   -- Ghost - Impera  
 INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
('Darkness At The Heart Of My Love', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839922/Ghost_-_Darkness_At_The_Heart_Of_My_Love_Subtitulada_al_espa%C3%B1ol_-_blacksheep_djeqk0.mp3', '', ''),  
('Spillways', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839918/Ghost_-_Spillways_Official_Music_Video_-_GhostBCVEVO_bidop0.mp3', '', ''),  
('Rats', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839918/Ghost_-_Rats_Official_Music_Video_-_GhostBCVEVO_dmqhk5.mp3', '', ''),  
('Satan Prayer', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839918/Ghost_-_Satan_Prayer_Subtitulado_en_Espa%C3%B1ol_-_Ghost_En_Espa%C3%B1ol_yd6emj.mp3', '', ''),  
('Mary On A Cross', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839917/Ghost_-_Mary_On_A_Cross_Subtitulado_-_M_%C3%98_M_E_e9c8eh.mp3', '', ''),  
('Life Eternal', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839917/Ghost_-_Life_Eternal_Palacio_de_los_Deportes_Concert_Video_-_Ghost_puwxfr.mp3', '', ''),  
('Square Hammer', 8, 8, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741839924/Square_Hammer____Ghost_Music_Video_Sub_Espa%C3%B1ol_-_Stella_BC_dyythi.mp3', '', ''); 


-- Gorillaz - Demon Days  
 INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
('Cracker Island ft. Thundercat', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838564/Gorillaz_-_Cracker_Island_ft._Thundercat_Official_Video_-_Gorillaz_fvje1e.mp3', '', ''),  
('Clint Eastwood', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838562/Gorillaz_-_Clint_Eastwood_Official_Video_-_Gorillaz_qryq78.mp3', '', ''),  
('Shes My Collar', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838561/gorillaz____she_s_my_collar_feat._kali_uchis_espa%C3%B1ol_-_coexist_subs_dsyf5m.mp3', '', ''),  
('Feel Good Inc.', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838557/Gorillaz_-_Feel_Good_Inc._Letra_Lyrics_-_Majestic_Sounds_mq0cci.mp3', '', ''),  
('Humility', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838555/Gorillaz_-_Humility_Sub_Espa%C3%B1ol_V%C3%ADdeo_-_Orange_Nuts_eecvzr.mp3', '', ''),  
('Plastic Beach', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838550/Gorillaz_-_Plastic_Beach_-_Gorillaz_Expresso_kfv5rv.mp3', '', ''),  
('Rhinestone Eyes', 9, 9, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838548/Gorillaz_-_Rhinestone_Eyes_Storyboard_Film_Official_Music_Video_-_Gorillaz_fdce61.mp3', '', ''); 

    -- Héctor Lavoe - Comedia 
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES  
   ('El Cantante', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061097/01_-_El_Cantante_fgll8e.flac', '', ''),  
('Mi Gente', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061043/02_-_Mi_Gente_y6vm4i.flac', '', ''),  
('Noche de Farra', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061045/03_-_Noche_De_Farra_jjm36d.flac', '', ''),  
('Periódico de Ayer', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061086/04_-_Periodico_De_Ayer_l3huyh.flac', '', ''),  
('Te Conozco', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061048/05_-_Te_Conozco_gckwhd.flac', '', ''),  
('Hacha y Machete', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061049/06_-_Hacha_Y_Machete_i7nd1g.flac', '', ''),  
('Soy Vagabundo', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061068/07_-_Soy_Vagabundo_k9l1lw.flac', '', ''),  
('Rompe Saraguey', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061073/08_-_Rompe_Saraguey_zgeszg.flac', '', ''),  
('Barrunto', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061060/09_-_Barrunto_v6ckql.flac', '', ''),  
('El Todopoderoso', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061058/10_-_El_Todopoderoso_klgnwt.flac', '', ''),  
('Llore', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061079/11_-_Llore_ivxhok.flac', '', ''),  
('El Rey de la Punctualidad', 10, 10, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061085/12_-_El_Rey_De_La_Punctualidad_rqnljn.flac', '', '');

    -- Imagine Dragons - Night Visions  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
    ('Demons', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838927/Imagine_Dragons_-_Demons_Official_Music_Video_-_ImagineDragonsVEVO_t6sg7n.mp3', '', ''),  
('Natural', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838925/Imagine_Dragons_-_Natural_-_ImagineDragonsVEVO_n5hckh.mp3', '', ''),  
('Thunder', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838922/Imagine_Dragons_-_Thunder_-_ImagineDragonsVEVO_wipz3g.mp3', '', ''),  
('Heathens', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838922/twenty_one_pilots_Heathens_from_Suicide_Squad_The_Album_OFFICIAL_VIDEO_-_Fueled_By_Ramen_n779yc.mp3', '', ''),  
('Enemy', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838914/Imagine_Dragons_x_JID_-_Enemy_Lyrics_-_7clouds_od6phf.mp3', '', ''),  
('Bones', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838912/Imagine_Dragons_-_Bones_Official_Music_Video_-_ImagineDragonsVEVO_nsx1fo.mp3', '', ''),  
('Believer', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838911/Imagine_Dragons_-_Believer_Official_Music_Video_-_ImagineDragonsVEVO_q1nez6.mp3', '', ''),  
('Birds', 11, 11, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741838908/Imagine_Dragons_-_Birds_Animated_Video_-_ImagineDragonsVEVO_vfohks.mp3', '', '');

    -- Linkin Park - Hybrid Theory  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
  ('In the End', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840087/In_The_End_Official_HD_Music_Video_-_Linkin_Park_-_Linkin_Park_z7uxoo.mp3', '', ''),  
('Crawling', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840086/Crawling_Official_HD_Music_Video_-_Linkin_Park_-_Linkin_Park_ihd9lf.mp3', '', ''),  
('New Divide', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840086/New_Divide_Official_Music_Video_4K_Upgrade_-_Linkin_Park_-_Linkin_Park_b4ezx3.mp3', '', ''),  
('From the Inside', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840086/From_The_Inside_Official_Music_Video_4K_UPGRADE_Linkin_Park_-_Linkin_Park_h4udsj.mp3', '', ''),  
('What I ve Done', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840083/What_I_ve_Done_Official_Music_Video_4K_Upgrade_-_Linkin_Park_-_Linkin_Park_w8e7dw.mp3', '', ''),  
('Numb', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840077/Numb_Official_Music_Video_4K_UPGRADE_Linkin_Park_-_Linkin_Park_ucmuv4.mp3', '', ''),  
('Faint', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840075/Faint_Official_Music_Video_4K_UPGRADE_Linkin_Park_-_Linkin_Park_ykmmkx.mp3', '', ''),  
('Breaking the Habit', 12, 12, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840070/Breaking_the_Habit_Official_Music_Video_HD_UPGRADE_Linkin_Park_-_Linkin_Park_ureerp.mp3', '', '');

    -- LP - Lost on You  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
    ('Other People', 13, 13, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840276/LP_-_Other_People_Official_Music_Video_-_LP_ahyxa7.mp3', '', ''),  
('Halo (Beyonce Cover)', 13, 13, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840271/LP_-_Halo_Beyonce_Cover_-_LP_xvnxx1.mp3', '', ''),  
('Don t Let Me Down', 13, 13, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840270/Lp_-_Don_t_Let_Me_Down_-_Le_Live_Musique_du_Figaro_hnsjp5.mp3', '', ''),  
('When We re High', 13, 13, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840262/LP_-_When_We_re_High_subtitulada_-_Funes_BW7_xezjof.mp3', '', ''),  
('Lost on You (Live)', 13, 13, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840250/LP_-_Lost_On_You_Live_-_LP_wdmuek.mp3', '', ''),  
('When We re High', 13, 13, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840246/LP_-_When_We_re_High_Official_Music_Video_-_LP_lyxxsq.mp3', '', '');


    -- Maná - Mana  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
    ('Cómo Te Deseo ', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840822/14-C%C3%B3mo_Te_Deseo_En_Vivo_2020_Remasterizado_nuoacz.mp3', '', ''),  
('Eres Mi Religión ', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840812/15-Eres_Mi_Religi%C3%B3n_2020_Remasterizado_oc9atb.mp3', '', ''),  
('No Ha Parado De Llover', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840807/12-No_Ha_Parado_De_Llover_tqwxnp.mp3', '', ''),  
('El Rey Tiburón', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840805/13-El_Rey_Tibur%C3%B3n_fy941b.mp3', '', ''),  
('Manda Una Señal', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840799/10-Manda_Una_Se%C3%B1al_g2qxrg.mp3', '', ''),  
('Labios Compartidos', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840798/03_-Labios_Compartidos_crfsz5.mp3', '', ''),  
('Mariposa Traicionera', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840797/05-Mariposa_Traicionera_2020_Remasterizado_znhkti.mp3', '', ''),  
('Ojalá Pudiera Borrarte', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840797/09-Ojal%C3%A1_Pudiera_Borrarte_bpdvkj.mp3', '', ''),  
('Me Vale', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840794/11-Me_Vale_esrmj2.mp3', '', ''),  
('Bendita Tu Luz', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840789/08-Bendita_Tu_Luz_cdpwmz.mp3', '', ''),  
('Oye Mi Amor', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840783/07-Oye_Mi_Amor_ixbbet.mp3', '', ''),  
('Clavado en un Bar', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840781/06-Clavado_en_un_bar_zh5baq.mp3', '', ''),  
('Vivir Sin Aire ', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840773/04-Vivir_Sin_Aire_Unplugged_2020_Remasterizado_jjvgai.mp3', '', ''),  
('En El Muelle De San Blas ', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840770/01-En_El_Muelle_De_San_Blas_Unplugged_2020_Remasterizado_ozzvq3.mp3', '', ''),  
('Rayando el Sol ', 14, 14, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741840762/02-Rayando_El_Sol_2020_Remasterizado_pce4sg.mp3', '', '');

    -- Manuel Turizo - ADN  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
    ('Sábanas Desordenadas', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061158/14_S%C3%A1banas_Desordenadas_ycitdv.mp3', '', ''),  
('Una Lady Como Tú (feat. Nicky Jam)', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061156/16_Una_Lady_Como_T%C3%BA_feat._Nicky_Jam_xb4xnz.mp3', '', ''),  
('No Le Perteneces', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061156/13_No_Le_Perteneces_svlm4h.mp3', '', ''),  
('Te Quemaste', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061155/15_Te_Quemaste_zzfuo8.mp3', '', ''),  
('No Me Conoce', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061153/11_No_Me_Conoce_vtcgzi.mp3', '', ''),  
('Te Pido Perdón', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061150/12_Te_Pido_Perd%C3%B3n_tbgsda.mp3', '', ''),  
('No Digas Que Te Vas', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061147/10_No_Digas_Que_Te_Vas_swmxk5.mp3', '', ''),  
('Nada Ha Cambiado', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061145/09_Nada_Ha_Cambiado_rc5bh0.mp3', '', ''),  
('Caso Perdido', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061141/08_Caso_Perdido_mo9txl.mp3', '', ''),  
('Esperándote', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061138/02_Esper%C3%A1ndote_rfstyr.mp3', '', ''),  
('Esclavo de Tus Besos', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061135/06_Esclavo_de_Tus_Besos_n9zgfj.mp3', '', ''),  
('Culpables', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061135/03_Culpables_tdd9nc.mp3', '', ''),  
('Bailemos', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061133/07_Bailemos_aepgm7.mp3', '', ''),  
('Una Vez Más', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061133/05_Una_Vez_M%C3%A1s_fpb9v6.mp3', '', ''),  
('Sola', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061126/04_Sola_jkoiow.mp3', '', ''),  
('Una Lady Como Tú', 15, 15, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061120/01_Una_Lady_Como_T%C3%BA_eedhxo.mp3', '', '');

    -- Morat - Balas Perdidas  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
('Cuando Nadie Ve', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997902/10_-_Cuando_Nadie_Ve_zstzgv.mp3', '', ''),  
('Yo No Merezco Volver', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997901/08_-_Yo_No_Merezco_Volver_tbkog5.mp3', '', ''),  
('Punto y Aparte', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997900/11_-_Punto_Y_Aparte_ghyuud.mp3', '', ''),  
('11 Besos', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997898/12_-_11_Besos_fbxo1p.mp3', '', ''),  
('Maldita Costumbre', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997894/09_-_Maldita_Costumbre_dc0oeh.mp3', '', ''),  
('No Se Va', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997893/05_-_No_Se_Va_u0yrft.mp3', '', ''),  
('El Embrujo (feat. Antonio Carmona & Josemi Carmona)', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997891/07_-_El_Embrujo_feat._Antonio_Carmona_Josemi_Carmona_egx8fv.mp3', '', ''),  
('Besos en Guerra', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997888/03_-_Besos_En_Guerra_zazucc.mp3', '', ''),  
('Acuérdate de Mí', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997885/02_-_Acuerdate_De_Mi_aset9q.mp3', '', ''),  
('Mi Vida Entera', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997885/06_-_Mi_Vida_Entera_oonsdi.mp3', '', ''),  
('Cuando el Amor Se Escapa', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997883/04_-_Cuando_El_Amor_Se_Escapa_eatzih.mp3', '', ''),
('Otras Se Pierden', 16, 16, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997880/01_-_Otras_Se_Pierden_ne5n5p.mp3', '', '');
    
    -- Paramore - Riot!  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
   ('Future', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741843214/17._Paramore_-_Future_hphyur.flac', '', ''),  
('Be Alone', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741843213/16._Paramore_-_Be_Alone_rknpkr.flac', '', ''),  
('Hate to See Your Heart Break (feat. Joy Williams)', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741843187/13._Paramore_Feat._Joy_Williams_-_Hate_to_See_Your_Heart_Break_feat._Joy_Williams_zcktms.flac', '', ''),  
('One of Those Crazy Girls', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741843181/14._Paramore_-_One_of_Those_Crazy_Girls_ehn2vg.flac', '', ''),  
('Proof', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741843177/12._Paramore_-_Proof_urio7s.flac', '', ''),  
('Still into You', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741843141/09._Paramore_-_Still_into_You_ufgole.flac', '', ''),  
('Interlude: Holiday', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741842302/11._Paramore_-_Interlude_Holiday_p9ti2s.flac', '', ''),  
('Anklebiters', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741842289/10._Paramore_-_Anklebiters_c8g61r.flac', '', ''),  
('Interlude: I\'m Not Angry Anymore', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741842239/15._Paramore_-_Interlude_I_m_Not_Angry_Anymore_szmdmz.flac', '', ''),  
('Last Hope', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741842148/08._Paramore_-_Last_Hope_tboqig.flac', '', ''),  
('Part II', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741842109/07._Paramore_-_Part_II_ukvkua.flac', '', ''),  
('Ain t It Fun', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841817/06._Paramore_-_Ain_t_It_Fun_ohuunc.flac', '', ''),  
('Fast in My Car', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841711/01._Paramore_-_Fast_in_My_Car_sagx79.flac', '', ''),  
('Now', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841707/02._Paramore_-_Now_capf1h.flac', '', ''),  
('Daydreaming', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841703/04._Paramore_-_Daydreaming_v7xqdj.flac', '', ''),  
('Grow Up', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841703/03._Paramore_-_Grow_Up_cqmblb.flac', '', ''),  
('Interlude: Moving On', 17, 17, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841666/05._Paramore_-_Interlude_Moving_On_dgairu.flac', '', '');  


    -- Romeo Santos - Fórmula, Vol. 1  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
  ('Bellas', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061241/12_Bellas_feat._Romeo_Santos_a0jj9i.mp3', '', ''),  
('Años Luz', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061240/11_A%C3%B1os_Luz_lobqlu.mp3', '', ''),  
('Inmortal', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061239/13_Inmortal_mg6bns.mp3', '', ''),  
('Los Últimos', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061237/10_Los_%C3%9Altimos_kg5k1i.mp3', '', ''),  
('Me Quedo', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061233/09_Me_Quedo_iirx4u.mp3', '', ''),  
('El Beso Que No Le Di', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061231/06_El_Beso_Que_No_Le_Di_byj0k4.mp3', '', ''),  
('Amor Enterrado', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061230/08_Amor_Enterrado_q2wage.mp3', '', ''),  
('Millonario', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061227/05_Millonario_jhfyhq.mp3', '', ''),  
('Payasos', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061224/03_Payasos_jqzpbe.mp3', '', ''),  
('La Demanda', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061218/04_La_Demanda_jzvgcy.mp3', '', ''),  
('Ileso', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061217/07_Ileso_rk4gw9.mp3', '', ''),  
('Canalla', 18, 18, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742061213/02_Canalla_u8ha2f.mp3', '', '');

    -- Taylor Swift - Evermore  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
('A Perfectly Good Heart', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867292/14._Taylor_Swift_-_A_Perfectly_Good_Heart_ginvef.flac', '', ''),  
('Tied Together with a Smile', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867288/07._Taylor_Swift_-_Tied_Together_with_a_Smile_htygin.flac', '', ''),  
('Teardrops on My Guitar (Pop Version)', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867287/15._Taylor_Swift_-_Teardrops_on_My_Guitar_Pop_Version_vscwjy.flac', '', ''),  
('Should ve Said No (US Album Version)', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867286/09._Taylor_Swift_-_Should_ve_Said_No_US_Album_Version_ckhhjf.flac', '', ''),  
('Mary s Song (Oh My My My)', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867284/10._Taylor_Swift_-_Mary_s_Song_Oh_My_My_My_blns2m.flac', '', ''),  
('I m Only Me When I m With You', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867283/12._Taylor_Swift_-_I_m_Only_Me_When_I_m_With_You_juejse.flac', '', ''),  
('Stay Beautiful', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867283/08._Taylor_Swift_-_Stay_Beautiful_tl4xl3.flac', '', ''),  
('Invisible', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867282/13._Taylor_Swift_-_Invisible_nkdu1h.flac', '', ''),  
('Our Song (Album Version)', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867277/11._Taylor_Swift_-_Our_Song_Album_Version_jnwagy.flac', '', ''),  
('Teardrops on My Guitar (Radio Single Remix)', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867265/03._Taylor_Swift_-_Teardrops_On_My_Guitar_Radio_Single_Remix_m8h5wt.flac', '', ''),  
('The Outside', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867263/06._Taylor_Swift_-_The_Outside_sodihj.flac', '', ''),  
('Tim McGraw', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867261/01._Taylor_Swift_-_Tim_McGraw_oj8xef.flac', '', ''),  
('Cold As You', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867258/05._Taylor_Swift_-_Cold_As_You_y8tgx3.flac', '', ''),  
('Picture To Burn', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867253/02._Taylor_Swift_-_Picture_To_Burn_uipb08.flac', '', ''),  
('A Place in this World', 19, 19, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867243/04._Taylor_Swift_-_A_Place_in_this_World_io2qeq.flac', '', '');  


    -- The Animals - The Animals  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
  ('Around and Around', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998027/34._Around_and_Around_o381ya.mp3', '', ''),  
('I Ain t Got You', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998026/31._I_Ain_t_Got_You_l2yyaa.mp3', '', ''),  
('The Right Time', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998025/35._The_Right_Time_jcqzje.mp3', '', ''),  
('Memphis Tennessee', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998024/30._Memphis_Tennessee_uadi5d.mp3', '', ''),  
('Roberta', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998023/29._Roberta_melqfo.mp3', '', ''),  
('F-E-E-L', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998019/33._F-E-E-L_rtgv0l.mp3', '', ''),  
('Take It Easy', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998017/32._Take_It_Easy_bw5ez1.mp3', '', ''),  
('Bury My Body', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998013/26._Bury_My_Body_e03mvz.mp3', '', ''),  
('Worried Life Blues', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998013/27._Worried_Life_Blues_seksz6.mp3', '', ''),  
('Blue Feeling', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998011/28._Blue_Feeling_otrxyg.mp3', '', ''),  
('For Miss Caulker', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998011/21._For_Miss_Caulker_rexvol.mp3', '', ''),  
('She Said Yeah', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998010/25._She_Said_Yeah_g182ct.mp3', '', ''),  
('The Story of Bo Diddley', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998008/24._The_Story_of_Bo_Diddley_x9dxpn.mp3', '', ''),  
('I m In Love Again', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741998002/23._I_m_In_Love_Again_om8vth.mp3', '', ''),  
('How You ve Changed', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997997/15._How_You_ve_Changed_lqtg9n.mp3', '', ''),  
('Mess Around', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997996/20._Mess_Around_pkuthw.mp3', '', ''),  
('Talkin  Bout You', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997996/22._Talkin_Bout_You_edytco.mp3', '', ''),  
('I m Mad Again', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997990/18._I_m_Mad_Again_fwgazk.mp3', '', ''),  
('The Girl Can t Help It', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997990/16._The_Girl_Can_t_Help_It_d7ooam.mp3', '', ''),  
('Dimples', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997989/19._Dimples_lf9jij.mp3', '', ''),  
('Club-A-Go-Go', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997985/17._Club-A-Go-Go_bdaecu.mp3', '', ''),  
('Gonna Send You Back to Walker', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997983/14._Gonna_Send_You_Back_to_Walker_c063b6.mp3', '', ''),  
('Baby Let Me Take You Home', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997977/13._Baby_Let_Me_Take_You_Home_ufpbvv.mp3', '', ''),  
('Let the Good Times Roll', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997976/12._Let_the_Good_Times_Roll_vb4w59.mp3', '', ''),  
('Boom Boom', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997971/11._Boom_Boom_dgxfaa.mp3', '', ''),  
('I Believe to My Soul', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997971/9._I_Believe_to_My_Soul_sy1s7g.mp3', '', ''),  
('It s My Life', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997970/4._It_s_My_Life_evag1t.mp3', '', ''),  
('I m Crying', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997970/10._I_m_Crying_g0zgau.mp3', '', ''),  
('I m Going to Change the World', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997965/8._I_m_Going_to_Change_the_World_ba5xtb.mp3', '', ''),  
('Hallelujah I Love Her So', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997963/6._Hallelujah_I_Love_Her_So_zdca0b.mp3', '', ''),  
('Roadrunner', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997963/7._Roadrunner_uob21u.mp3', '', ''),  
('We ve Gotta Get Out of This Place', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997961/3._We_ve_Gotta_Get_Out_of_This_Place_flocao.mp3', '', ''),  
('Bring It On Home to Me', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997953/5._Bring_It_On_Home_to_Me_e9wg3w.mp3', '', ''),  
('The House of the Rising Sun', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997953/1._The_House_of_the_Rising_Sun_bbv32g.mp3', '', ''),  
('Don t Let Me Be Misunderstood', 20, 20, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741997953/2._Don_t_Let_Me_Be_Misunderstood_buaczx.mp3', '', '');

    -- Radiohead - OK Computer  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
  ('Everything In Its Right Place', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060748/17_Everything_In_Its_Right_Place_ibrhwq.mp3', '', ''),  
('Go To Sleep', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060747/20_Go_To_Sleep_hyd3nz.mp3', '', ''),  
('I Might Be Wrong', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060747/19_I_Might_Be_Wrong_mxqqsm.mp3', '', ''),  
('Airbag', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060746/18_Airbag_wmxzrn.mp3', '', ''),  
('Pyramid Song', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060743/15_Pyramid_Song_ibi97l.mp3', '', ''),  
('Street Spirit (Fade Out)', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060742/16_Street_Spirit_Fade_Out_mjvzoq.mp3', '', ''),  
('Idioteque', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060733/12_Idiotesque_ell75a.mp3', '', ''),  
('The Bends', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060730/14_The_Bends_qgow9j.mp3', '', ''),  
('Optimistic', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060728/10_Optimistic_bqhj3f.mp3', '', ''),  
('2 + 2 = 5', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060727/13_2_2_5_mmabqo.mp3', '', ''),  
('Fake Plastic Trees', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060724/11_Fake_Plastic_Trees_yejewy.mp3', '', ''),  
('There There', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060720/08_There_There_e5la8x.mp3', '', ''),  
('Lucky', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060714/09_Lucky_bzvaj3.mp3', '', ''),  
('My Iron Lung', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060708/07_My_Iron_Lung_ouykeq.mp3', '', ''),  
('Paranoid Android', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060705/02_Paranoid_Android_xkclwv.mp3', '', ''),  
('No Surprises', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060703/05_No_Surprises_bpiymu.mp3', '', ''),  
('Creep', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060701/04_Creep_fttiig.mp3', '', ''),  
('Karma Police', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060699/03_Karma_Police_vyh366.mp3', '', ''),  
('High And Dry', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060698/06_High_And_Dry_ylf6it.mp3', '', ''),  
('Just', 21, 21, 'https://res.cloudinary.com/dcolydznr/video/upload/v1742060690/01_Just_p6qaoo.mp3', '', '');

    -- The Rolling Stones - Sticky Fingers 
   INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
('Wild Horses', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867472/16_Wild_Horses_kwytl7.mp3', '', ''),  
('Undercover of the Night', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867471/18_Undercover_of_the_Night_ecfixq.mp3', '', ''),  
('Angie', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867469/06_Angie_uilxff.mp3', '', ''),  
('Waiting on a Friend', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867468/15_Waiting_on_a_Friend_ijhwmy.mp3', '', ''),  
('Bitch', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867467/17_Bitch_n4pdfy.mp3', '', ''),  
('Respectable', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867467/13_Respectable_ewx3ow.mp3', '', ''),  
('Miss You', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867462/10_Miss_You_ltwv87.mp3', '', ''),  
('Beast of Burden', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867462/14_Beast_of_Burden_c92bux.mp3', '', ''),  
('Mixed Emotions', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867460/05_Mixed_Emotions_der1bw.mp3', '', ''),  
('Hot Stuff', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867459/11_Hot_Stuff_bwjult.mp3', '', ''),  
('Emotional Rescue', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867458/12_Emotional_Rescue_ev7zka.mp3', '', ''),  
('Fool to Cry', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867457/08_Fool_to_Cry_vpucjc.mp3', '', ''),  
('Rock and a Hard Place', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867452/09_Rock_and_a_Hard_Place_e1succ.mp3', '', ''),  
('Brown Sugar', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867452/02_Brown_Sugar_qyllgc.mp3', '', ''),  
('It s Only Rock \'N Roll (But I Like It)', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867452/04_It_s_Only_Rock_N_Roll_But_I_Like_It_bweebi.mp3', '', ''),  
('Tumbling Dice', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867447/07_Tumbling_Dice_d7vcoe.mp3', '', ''),  
('Harlem Shuffle', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867445/03_Harlem_Shuffle_vwegm9.mp3', '', ''),  
('Start Me Up', 22, 22, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741867442/01_Start_Me_Up_v6o3ln.mp3', '', '');

    -- The People - Torches  
     INSERT INTO canciones (titulo, id_album, id_artista, audio, pista_subtitulo, imagen) 
VALUES 
   ('Imagination (Sub. Español)', 23, 23, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841111/Foster_The_People_-_Imagination__Sub._Espa%C3%B1ol_-_Maximiliano_Galv%C3%A1n_fzvbw4.mp3', '', ''),  
('Pumped Up Kicks', 23, 23, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841110/Foster_The_People_-_Pumped_Up_Kicks_Official_Video_-_fosterthepeopleVEVO_y9p1lv.mp3', '', ''),  
('Chasing Low Vibrations', 23, 23, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841109/Foster_The_People_-_Chasing_Low_Vibrations_Official_Audio_-_FosterThePeople_ximkmz.mp3', '', ''),  
('Houdini', 23, 23, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841106/Foster_The_People_-_Houdini_Video_-_fosterthepeopleVEVO_bqi9y2.mp3', '', ''),  
('We Are The People (Sub. Español)', 23, 23, 'https://res.cloudinary.com/dcolydznr/video/upload/v1741841098/Empire_of_the_sun_-_We_Are_The_People____Sub_esp._-_venusbjx_pewrqa.mp3', '', '');  
