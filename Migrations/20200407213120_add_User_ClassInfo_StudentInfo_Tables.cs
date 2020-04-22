using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectInfo.Migrations
{
    public partial class add_User_ClassInfo_StudentInfo_Tables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClassInfos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClassID = table.Column<string>(nullable: true),
                    Semester = table.Column<string>(nullable: true),
                    Year = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassInfos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    TokenExpiresIn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Add_StudentInfo",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PNames = table.Column<string>(nullable: true),
                    Tused = table.Column<string>(nullable: true),
                    GRepo = table.Column<string>(nullable: true),
                    Tmembers = table.Column<string>(nullable: true),
                    GName = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    ClassInfoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Add_StudentInfo", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Add_StudentInfo_ClassInfos_ClassInfoId",
                        column: x => x.ClassInfoId,
                        principalTable: "ClassInfos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Add_StudentInfo_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Add_StudentInfo_ClassInfoId",
                table: "Add_StudentInfo",
                column: "ClassInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_Add_StudentInfo_UserId",
                table: "Add_StudentInfo",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Add_StudentInfo");

            migrationBuilder.DropTable(
                name: "ClassInfos");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
