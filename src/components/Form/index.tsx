import { Box, Divider, Stack, Typography } from '@mui/material';
import { FormsType } from '../../type';
import D10 from '../../assets/d10.svg';
import D8 from '../../assets/d8.svg';
import D6 from '../../assets/d6.svg';
import D4 from '../../assets/d4.svg';
import { SkillComponent } from './components/Skill';
import { ActionsComponent } from '../Actions';

function diceSVG(dice: string) {
  switch (dice) {
    case 'd10':
      return D10;
    case 'd8':
      return D8;
    case 'd6':
      return D6;
    case 'd4':
      return D4;
    default:
      return dice;
  }
}

type FormComponentType = {
  allForms: FormsType;
  selectedForm: string[];
};

export const FormComponent = ({
  selectedForm,
  allForms,
}: FormComponentType) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={4}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ display: 'flex' }}
    >
      {selectedForm.map((form: string, index: number) => {
        return (
          <Box
            key={form + index}
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
                  {form}
                </Typography>
                <Box sx={{ marginBottom: '8px' }}>
                  <i>{allForms[form].alt.join(' / ')}</i>
                </Box>
              </Box>
              <Box
                sx={{
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  marginLeft: '16px',
                }}
              >
                <Stack direction={'row'}>
                  {allForms[form].dices.map(({ value, color }, index) => (
                    <Box key={value + color + index} sx={{ marginRight: '16px' }}>
                      <img width={80} src={diceSVG(value)} alt="" />
                    </Box>
                  ))}
                </Stack>
              </Box>
              <Box sx={{ margin: '8px 12px 8px 12px', textAlign: 'justify' }}>
                {allForms[form].passive.map((passive) => (
                  <Box sx={{ marginBottom: '16px' }} key={passive}>
                    {passive}
                  </Box>
                ))}
              </Box>
              <Box sx={{ margin: '0 8px 0 8px' }}>

                <ActionsComponent actions={allForms[form].actions} />
              </Box>
              <Box sx={{ margin: '0 8px 0 8px' }}>

                <SkillComponent
                  name={allForms[form].skill.name}
                  description={allForms[form].skill.description}
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};
