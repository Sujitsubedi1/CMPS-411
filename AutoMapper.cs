using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ProjectInfo.DTOs;
using ProjectInfo.Model;

namespace ProjectInfo
{
    public class AutoMapper: Profile
    {
        public AutoMapper()
        {
            CreateMap<AdminData, AdminDatadtos>()
                .ForMember(dest => dest.StudentNo, src => src.MapFrom(src => src.ID))
                .ForMember(dest => dest.Names, src => src.MapFrom(src => src.Names))
                  .ForMember(dest => dest.FrameworkUsed, src => src.MapFrom(src => src.Framework))
                    .ForMember(dest => dest.ClassID, src => src.MapFrom(src => src.Classinfos.ClassID))
                      .ForMember(dest => dest.Year, src => src.MapFrom(src => src.Classinfos.Year))
                        .ForMember(dest => dest.Semester, src => src.MapFrom(src => src.Classinfos.Semester))
                          .ForMember(dest => dest.ClassInfoID, src => src.MapFrom(src => src.Classinfos.id));




        }
    }
}
