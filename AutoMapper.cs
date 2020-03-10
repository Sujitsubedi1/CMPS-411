using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ProjectInfo.DTOs;
using ProjectInfo.Model;

namespace ProjectInfo
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<Add_StudentInfo, Add_StudentInfoDTO>()
            .ForMember(dest => dest.ID, src => src.MapFrom(src => src.ID))
            .ForMember(dest => dest.PNames, src => src.MapFrom(src => src.PNames))
            .ForMember(dest => dest.Tused, src => src.MapFrom(src => src.Tused))
             .ForMember(dest => dest.GRepo, src => src.MapFrom(src => src.GRepo))
             .ForMember(dest => dest.Tmembers, src => src.MapFrom(src => src.Tmembers))
             .ForMember(dest => dest.description, src => src.MapFrom(src => src.description))
             .ForMember(dest => dest.GName, src => src.MapFrom(src => src.GName))
             .ForMember(dest => dest.ClassName, src => src.MapFrom(src => src.ClassInfo.ClassID))
             .ForMember(dest => dest.Semester, src => src.MapFrom(src => src.ClassInfo.Semester))
              .ForMember(dest => dest.Year, src => src.MapFrom(src => src.ClassInfo.Year))
                .ForMember(dest => dest.ClassInfoID, src => src.MapFrom(src => src.ClassInfo.id))
                .ForMember(dest => dest.UserId, src => src.MapFrom(src => src.User.Id));





        }
    }
}
