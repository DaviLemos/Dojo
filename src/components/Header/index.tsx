import { Box, Button, Chip, Divider, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, Theme } from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from "@emotion/react";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export const HeaderComponent = ({ darkMode, setDarkMode, allForms, selectedForm, setSelectedForm, allArchetypes, setSelectedArchetypes, selectedArchetypes
}) => {
  const theme = useTheme();
  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }


  const handleChangeForm = (event: SelectChangeEvent<typeof selectedForm>) => {
    const {
      target: { value },
    } = event;
    setSelectedForm(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleChangeStyle = (event: SelectChangeEvent<typeof selectedArchetypes>) => {
    const {
      target: { value },
    } = event;
    setSelectedArchetypes(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Box>
      <Stack direction={'row'}>
        <FormControl fullWidth sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Forms</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedForm}
            onChange={handleChangeForm}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}

              </Box>
            )}
            MenuProps={MenuProps}
          >
            {Object.keys(allForms).map((form) => (
              <MenuItem
                key={form}
                value={form}
                style={getStyles(form, selectedForm, theme)}
              >
                {form}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Divider orientation="vertical" flexItem />
        <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</Button>
        {/* <Divider orientation="vertical" flexItem />
        <FormControl fullWidth sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Forms</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedArchetypes}
            onChange={handleChangeStyle}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}

              </Box>
            )}
            MenuProps={MenuProps}
          >
            {Object.keys(allArchetypes).map((form) => (
              <MenuItem
                key={form}
                value={form}
                style={getStyles(form, selectedArchetypes, theme)}
              >
                {form}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
      </Stack>
    </Box>)
}