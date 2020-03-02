using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectInfo.Migrations
{
    public partial class sinfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DummyData");

            migrationBuilder.AddColumn<int>(
                name: "Classinfosid",
                table: "AdminData",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Add_StudentInfo",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PNames = table.Column<string>(nullable: true),
                    Tused = table.Column<string>(nullable: true),
                    GRepo = table.Column<string>(nullable: true),
                    Tmembers = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Add_StudentInfo", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ProjectInfo",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    P_Names = table.Column<string>(nullable: true),
                    T_used = table.Column<string>(nullable: true),
                    G_Repo = table.Column<string>(nullable: true),
                    members = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectInfo", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdminData_Classinfosid",
                table: "AdminData",
                column: "Classinfosid");

            migrationBuilder.AddForeignKey(
                name: "FK_AdminData_ClassInfos_Classinfosid",
                table: "AdminData",
                column: "Classinfosid",
                principalTable: "ClassInfos",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdminData_ClassInfos_Classinfosid",
                table: "AdminData");

            migrationBuilder.DropTable(
                name: "Add_StudentInfo");

            migrationBuilder.DropTable(
                name: "ProjectInfo");

            migrationBuilder.DropIndex(
                name: "IX_AdminData_Classinfosid",
                table: "AdminData");

            migrationBuilder.DropColumn(
                name: "Classinfosid",
                table: "AdminData");

            migrationBuilder.CreateTable(
                name: "DummyData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DummyData", x => x.Id);
                });
        }
    }
}
