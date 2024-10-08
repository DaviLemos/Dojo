import { Box } from '@mui/material';
import { ActionType } from '../../type';

type ActionsComponentType = {
  actions: ActionType[];
};

export const ActionsComponent = ({ actions }: ActionsComponentType) => {
  return (
    <Box >
      {actions.map((action) => (
        <Box
          key={action.name}
          sx={{
            margin: '8px 0 8px 0',
            backgroundColor: '#33de82' 
          }}
        >
          <Box
            sx={{
              marginBottom: '4px',
              width: '60%',
              borderBottomRightRadius: '24px',
              backgroundColor: '#16691e',
              padding: '8px',
              color: 'white',
            }}
          >
            <strong>{action.cost.join(' or ')}:</strong> {action.name}
          </Box>
          <Box sx={{ padding: '16px 16px 16px 16px' }}>
            {action.effect.map((effect, index) => (
              <Box key={effect}>
                {index ? (
                  <strong>
                    {action.cost[index]}: {'  '}
                  </strong>
                ) : null}

                {effect}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
