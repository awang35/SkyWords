--When adding a new word, run this optional quiery
SELECT Score,
       PlayerName,
       NumWordsCorrect,
       Time
  FROM ScoreBank
       JOIN PlayerBank
         ON ScoreBank.PlayerID = PlayerBank.PlayerID
 ORDER BY score DESC
 LIMIT 5;

SELECT DISTINCT WordName
           FROM WordBank AS wb
                JOIN PlayerBank AS pb
                  ON wb.PlayerID = pb.PlayerID
          WHERE pb.PlayerName = 'Default';

SELECT Syn
  FROM SynBank
 WHERE WordName = 'taxi';

UPDATE WordBank
   SET WordName = 'taxi'
 WHERE WordName = 'Make' 
       AND
       PlayerID <> 0;

DELETE
  FROM WordBank
 WHERE WordName = 'taxi' 
       AND
       PlayerID <> 0;

INSERT INTO WordBank ( 
    WordName,
    WordLength,
    PlayerID 
) 
VALUES ( 
    'UserInput3',
    5,
    ( 
        SELECT PlayerID
          FROM PlayerBank
         WHERE PlayerName = 'James' 
    ) 
);

INSERT INTO PlayerBank ( 
    PlayerName 
) 
VALUES ( 
    'PlayerName2' 
);

INSERT INTO SynBank ( 
    WordName,
    Syn 
) 
VALUES ( 
    'crate',
    'Cube' 
);

DELETE
  FROM PlayerBank
 WHERE PlayerName = 'James';

DELETE
  FROM SynBank
 WHERE WordName = 'crate' 
       AND
       PlayerID <> 0;

INSERT INTO ScoreBank ( 
    Score,
    PlayerID,
    NumWordsCorrect,
    Time 
) 
VALUES ( 
    3939,
    ( 
        SELECT PlayerID
          FROM PlayerBank
         WHERE PlayerName = 'James' 
    ),
    3999,
    3 
);

SELECT WordName
  FROM WordBank
 WHERE PlayerID = ( 
           SELECT PlayerID
             FROM PlayerBank
            WHERE PlayerName = 'James' 
       );

DELETE
  FROM ScoreBank
 WHERE PlayerID = ( 
           SELECT PlayerID
             FROM PlayerBank
            WHERE PlayerName = 'James' 
       );

