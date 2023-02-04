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
            50:"#F7FAFC",
            100:"#EDF2F7",
            200:"#E2E8F0",
            300:"#CBD5E0",
            400:"#A0AEC0",
            500:"#718096",
            600:"#4A5568",
            700:"#2D3748",
            800:"#1A202C",
            900:"#171923"
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