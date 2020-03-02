using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectInfo.Migrations
{
    public partial class addlatest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GName",
                table: "Add_StudentInfo",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "Add_StudentInfo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GName",
                table: "Add_StudentInfo");

            migrationBuilder.DropColumn(
                name: "description",
                table: "Add_StudentInfo");
        }
    }
}
