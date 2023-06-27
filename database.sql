
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "manga_book" (
	"id" SERIAL PRIMARY KEY,
	"manga_id" INTEGER Unique,
	"title" varchar(255),
	"img" varchar(255),
	"avg_rate" decimal,
	"description" varchar(10000) null,
	"start_date" timestamp,
	"updated_at" timestamp,
	"status" varchar(50),
	"last_read" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

CREATE TABLE "manga_library" (
	"id" SERIAL PRIMARY KEY,
	"user_id" integer REFERENCES "user",
	"manga_book_id" integer REFERENCES "manga_book",
	"done_reading" boolean null default(false)
);
