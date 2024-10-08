import { Box } from '@mui/material';
import { SkillType } from '../../../../type';

export const SkillComponent = ({ name, description }: SkillType) => {
  return (
    <Box
      id="skill"
      sx={{
        backgroundColor: '#cdde70',
      }}
    >
      <Box
        sx={{
          width: '60%',
          borderBottomRightRadius: '24px',
          backgroundColor: '#bd4f00',
          padding: '8px',
          color: 'white',
        }}
      >
        <strong>{name}</strong>
      </Box>
      <Box sx={{ padding: '16px 16px 16px 16px' }}>{description}</Box>
    </Box>
  );
};
