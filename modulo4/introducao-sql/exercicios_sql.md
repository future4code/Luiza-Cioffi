### Exercício 1
a)  VACHAR(n) - são strings de no máximo 'n' caracteres. 
    DATE - representa uma data com formato yyyy-mm-dd
    PRIMARY KEY - indica que é o dado chave da tabela. Automaticamente ele não pode ser nulo e não pode se repetir em linhas diferentes

b)  SHOW DATABASE - mostra o database que estou usando
    SHOW TABLE - mostra as tabelas dentro desse database

c)  O resultado mostra a estrutura da tabela. Neste caso, a tabela se organiza com a linhas id *(que deve ser um varchar de n = 255, não pode ser null, é a primary key)*, name *(que também deve ser um varchar de n = 255 e não pode ser null)*, salary *(número não intiro e não nulo)*, birth_date *(que deve ser uma data no frmato yyyy-mm-dd, não nulo)* e gender *(que deve ser um varchar de n = 6, não pode ser null)*, nessa ordem.


### Exercício 2
a)  INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "female"
    );

b)  Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
    (Código de erro: 1062. Entrada duplicada de '002' para chave primária)
Para organizar os dados de forma que uma linha sempre seja única, é preciso que não seja permitido adicionar linhas com primary keys repetidas, desta forma, o erro aconteceu porque antes eu já havia inserido a atriz Glória Pires com a primary key 002. 

c)  Error Code: 1136. Column count doesn't match value count at row 1
    (Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1)
O erro ocorreu porque foi solicitado menos colunas do que a quantidade de valores adicionadas (faltou solicitar birth_date e gender). Código corrigido:
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );

d)  Error Code: 1364. Field 'name' doesn't have a default value
    (Código de erro: 1364. O campo 'name' não tem um valor padrão)
Este erro ocorreu porque para adicionar um novo item à tabela o campo 'name' não pode ser nulo. Correção:
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004",
        "Antônio Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );

e)  Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
    (Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1)
O erro ocorreu porque, ao não utilizar as aspas para o valor de 'date', o MySQL interpretou o valor como um número inteiro seguido de subtrações, e não como uma data. Correção:
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );

f)  INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "006", 
        "Lino Facioli",
        20719333,
        "2000-07-29", 
        "male"
    );

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "007", 
        "Morena Baccarin",
        20700000,
        "1979-06-02", 
        "female"
    );


### Exercício 3
a) SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

b) SELECT salary from Actor WHERE name = "Tony Ramos";

c) O resultado foi uma linha com dados nulos, pois não há nenhum ator com gênero inválido;

d) SELECT id, name, salary, birth_date, gender from Actor WHERE salary <= 500000;

e)  Error Code: 1054. Unknown column 'nome' in 'field list'
    (Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos')
O erro aconteceu pelo uso da palavra 'nome' em lugar de 'name'. O correto seria:
    SELECT id, name from Actor WHERE id = "002" 


### Exercício 4
a) A query pede que sejam trazidas todas as colunas com atores cujos nomes comecem com a letra A ou J, e que tenham salários acima de 500000.

b)  SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 300000;

c)  SELECT * FROM Actor
    WHERE name LIKE "%G%" OR "%g%";

d)  SELECT * FROM Actor
    WHERE 
        (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
    AND salary BETWEEN 350000 AND 900000;


### Exercício 5
a)  CREATE TABLE Movie (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        synopsis TEXT NOT NULL,
        release_Date DATE NOT NULL,
        rating INT NOT NULL
    )

b)  INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "001", 
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06", 
        7
    );

c)  INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "002", 
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27", 
        10
    );

d)  INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "003", 
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02", 
        8
    );

e)  INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES(
        "004", 
        "Lisbela e o Prisioneiro",
        "A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se envolvido com sua esposa no passado.",
        "2003-08-22", 
        10
    );


### Exercício 6
a)  SELECT id, title, rating from Movie WHERE id = "003";

b)  SELECT * from Movie WHERE title = "Lisbela e o Prisioneiro";

c)  SELECT id, title, synopsis from Movie WHERE rating >= 7;


### Exercício 7
a)  SELECT * from Movie WHERE title LIKE "%vida%" OR title LIKE "%Vida%" OR title LIKE "%VIDA%";

b)  SELECT * from Movie WHERE title LIKE "%cinema%" OR title LIKE "%Cinema%" OR title LIKE "%CINEMA%" OR synopsis LIKE "%cinema%" OR synopsis LIKE "%Cinema%" OR synopsis LIKE "%CINEMA%";

c)  SELECT * FROM Movie WHERE release_date < "2022-02-10";

d)  SELECT * FROM Movie 
    WHERE (release_date < "2022-02-10") 
        AND (title LIKE "%cinema%" OR title LIKE "%Cinema%" OR title LIKE "%CINEMA%" OR synopsis LIKE "%cinema%" OR synopsis LIKE "%Cinema%" OR synopsis LIKE "%CINEMA%")
        AND (rating >= 7);