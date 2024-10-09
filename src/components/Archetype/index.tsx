import { Box, Divider, Stack, Typography } from "@mui/material";

// type ArchetypesTypes = {
//   [key: string]: {
//     styles: {
//       name: string;
//       range: string;
//     }[];
//   };
// }

type ArchetypeComponentType = {
  allArchetypes: any;
  selectedArchetypes: string[];
}

export const ArchetypeComponent = ({ allArchetypes, selectedArchetypes }: ArchetypeComponentType) => {
  console.log(allArchetypes)
  return (
    <Box>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={4}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ display: 'flex' }}
      >
        {
          selectedArchetypes.map((archetype: string, index: number) => {
            return (
              <Box
                key={archetype + index}
                sx={{ height: '100vh', width: '100%' }}
              >
                <Box
                  sx={{
                    backgroundColor: '#9199c2',
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: '4px',
                      width: '70%',
                      borderBottomRightRadius: '48px',
                      backgroundColor: '#426ac1',
                      padding: '8px',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      {archetype}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      marginLeft: '16px',
                    }}
                  >
                    <Stack direction={'row'}>

                      {/* {allArchetypes[archetype].styles.map((style: string, index: number) => {
                        return (
                          <Box
                            key={style + index}
                            sx={{
                              backgroundColor: '#426ac1',
                              color: 'white',
                              padding: '8px',
                              borderRadius: '8px',
                              marginBottom: '8px',
                              marginLeft: '8px',
                            }}
                          >
                            <Typography variant="h6" gutterBottom>
                              {style.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              Range: {style.range}
                            </Typography>

                          </Box>
                        );
                      })} */}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            );
          })
        }


      </Stack>

    </Box>
  );
}