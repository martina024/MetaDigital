import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const replaceExsiting={
    variant:{
        filled:{
            field:{
                focus:{
                    borderColor:"brand.500"
                },
            },
        },
    },
    size:{
        md:{
            field:{
                borderRadius:"none"
            },
        },
    },
}



const theme=extendTheme({
   
    colors:{
        brand:{
            50:"#EDFDFD",
            100:"#C4F1F9",
            200:"#9DECF9",
            300:"#76E4F7",
            400:"#0BC5EA",
            500:"#00B5D8",
            600:"#00A3C4",
            700:"#0987A0",
            800:"#086F83",
            900:"#065666"
        }
    },
    fonts:{
        heading:`Montserrat,${base.fonts.heading}`,
        body:"Inter" , 
    },
    components:{
        Button:{
            varient:{
                primary:(props)=>({
                    rounded:"none",
                    _focus:{
                        ring:2,
                        ringColor:"brnd.500"
                    },
                    backgroundColor:mode("brand.200","brand.300")(props),
                    color:mode("brand.900","brand.700")(props),
                    _hover:{
                        backgroundColor:mode("brand.700","brand.400")(props),
                        color:mode("brand.900","brand.700")(props),
                    }
                })
            }
        },
        Input:{...replaceExsiting},
        Select:{...replaceExsiting},
        Checkbox:{
            baseStyle:{
                control:{
                    _focus:{
                        ring:2,
                        ringColor:"brand.500"
                    }
                }
            }
        },
        Textarea:{
            variant:{
                filled:{
                    focus:{
                            borderColor:"brand.500"
                        },
                    
                },
            },
            size:{
                md:{
                    borderRadius:"none"
                },
            },
        }
    }
},
withDefaultColorScheme({
    colorScheme:"brand"
})
,withDefaultVariant({
    variant:"filled",
    components: ["Input", "Select", "Textarea"]
})
)

export default theme