### Exercício 1
a) Altera a tabela Actor, removendo a coluna 'salary'.

b) Altera a tabela Actor, trocando o termo 'gender' para 'sex' e especifica que é do tipo VARCHAR com no máximo 6 caracteres.

c) Altera a tabela Actor, alterando a coluna 'gender' (que tinha VARCHAR de n = 6) para 'gender' do tipo VARCHAR  com n = 255 (string com no máximo 255 caracteres).

d)  `ALTER TABLE 
    Actor CHANGE gender gender VARCHAR(100);`


### Exercício 2
a)  `UPDATE Actor
    SET 
        name = "Novo Nome"
        birth_date = "2022-01-01"
    WHERE id = "003";`

b)  `UPDATE Actor
    SET 
        name = "JULIANA PAES"
    WHERE name = "Juliana Paes";`
e      ```UPDATE Actor
    SET 
        name = "Juliana Paes"
    WHERE name = "JULIANA PAES";```

c)  ```UPDATE Actor
    SET 
        name = "Novo Nome"
        salary = 20700000
        birth_date = "2022-01-01"
        gender = "male"
    WHERE id = "005";```

d) O resultado foi: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0", ou seja, ela não apresentou um erro, apenas indicou que um total de zero dados foi compatível com a alteração, então houve zero alterações.


### Exercício 3
a)  ```DELETE FROM Actor 
    WHERE name = "Fernanda Montenegro"```

b)  ```DELETE FROM Actor
    WHERE gender = male AND salary > 1000000```


### Exercício 4
a)  ```SELECT MAX(salary) FROM Actor;```

b)  ```SELECT MIN(salary) 
    FROM Actor
    WHERE gender = "female";```

c)  ```SELECT COUNT(*) 
    FROM Actor 
    WHERE gender = "female";```

d)  ```SELECT SUM(salary)
    FROM Actor;```


### Exercício 5
a) A última query do exemplo retorna uma tabela com a quantidade total de pessoas do gênero masculino e o total de gênero feminino, ou seja, ela foi escrita para agrupar os elementos da tabela 'Actor' de acordo com a coluna 'gender'.

b)  ```SELECT id, name 
    FROM Actor 
    ORDER BY name DESC;```

c)  ```SELECT * 
    FROM Actor 
    ORDER BY salary;```

d)  ```SELECT * FROM Actor
    WHERE gender = 'male'
    ORDER BY salary ASC
    LIMIT 3;```

e)  ```SELECT AVG(salary), gender 
    FROM Actor
    GROUP BY gender;```


### Exercício 6
a)  ```ALTER TABLE Movie 
    ADD playing_limit_date DATE;```

b)  ```ALTER TABLE Movie 
    CHANGE rating rating FLOAT;```

c)  ```UPDATE Movie
    SET playing_limit_date = "2022-07-01"
    WHERE id = "001";```
e    ```UPDATE Movie
    SET playing_limit_date = "2020-07-01"
    WHERE id = "002";```

d)  ```DELETE FROM Movie WHERE id = "003";```
e    ```UPDATE Movie
    SET synopsis = "blablablablablablablabla"
    WHERE id = "003";```

 O resultado foi: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0", ou seja, ela não apresentou um erro, apenas indicou que um total de zero dado foi compatível com a alteração, então houve zero alterações.
