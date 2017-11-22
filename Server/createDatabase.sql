use [ChartingDemo]
create table Results (
    result_id int IDENTITY(1,1) not null,
    result_day date null,
    result_value float null
)

DECLARE @i int = 0
WHILE @i < 100 
BEGIN
	insert into Results
		(result_day, result_value)
	VALUES
		(dateadd(day, @i, '2017-01-01'), ABS(CHECKSUM(NewId())) % 100)

	set @i = @i + 1
END