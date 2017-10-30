namespace _2azInternet.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMoviesDbSet : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Movies",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 255),
                        ReleaseDate = c.DateTime(nullable: false),
                        DateAdded = c.DateTime(nullable: false),
                        NumberInStock = c.Short(nullable: false),
                        GenreId = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Genres", t => t.GenreId, cascadeDelete: true)
                .Index(t => t.GenreId);
            
            CreateTable(
                "dbo.Genres",
                c => new
                    {
                        Id = c.Byte(nullable: false),
                        Name = c.String(nullable: false, maxLength: 255),
                    })
                .PrimaryKey(t => t.Id);

            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (1, 'Action');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (2, 'Adventure');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (3, 'Comedy');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (4, 'Drama');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (5, 'Fantasy');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (6, 'Historical');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (7, 'Horror');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (8, 'Mistery');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (9, 'Saga');");
            Sql(@"INSERT INTO Genres (Id, Name)
VALUES (10, 'Thriller');");
          Sql(@"INSERT INTO Genres (Id, Name)
VALUES (11, 'Science fiction');");
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Movies", "GenreId", "dbo.Genres");
            DropIndex("dbo.Movies", new[] { "GenreId" });
            DropTable("dbo.Genres");
            DropTable("dbo.Movies");
        }
    }
}
