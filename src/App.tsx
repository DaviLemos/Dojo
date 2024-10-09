import React from 'react';
import {
  // getArchetypes,
  getDojoDB,
  //  getForms 
} from './api/api.ts';
import {
  Box,
  CssBaseline,
} from '@mui/material';
import { FormsType } from './type.ts';
import { FormComponent } from './components/Form/index.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HeaderComponent } from './components/Header/index.tsx';
import { ArchetypeComponent } from './components/Archetype/index.tsx';





function App() {

  const [allForms, setAllForms] = React.useState<FormsType>({});
  const [allArchetypes, setAllArchetypes] = React.useState({});
  const [selectedForm, setSelectedForm] = React.useState<string[]>([]);
  const [selectedArchetypes, setSelectedArchetypes] = React.useState<string[]>([]);
  const [darkMode, setDarkMode] = React.useState(true);

  const darkTheme = createTheme({
    colorSchemes: {
      // mode: 'dark',
      dark: darkMode,
    },
  })

  // const getFormsData = async () => {
  //   try {
  //     const allForms = await getForms();
  //     setAllForms(allForms);
  //     console.log(allForms);
  //   } catch {
  //     console.log('Error in fetching forms');
  //   }
  // };
  // const getArchetypesData = async () => {
  //   try {
  //     const allArchetypes = await getArchetypes();
  //     setAllArchetypes(allArchetypes);
  //     console.log(allArchetypes);
  //   } catch {
  //     console.log('Error in fetching Archetypes');
  //   }
  // };

  const getDojoDBData = async () => {
    try {
      const dojoDBData = await getDojoDB();
      setAllForms(dojoDBData.forms);
      setAllArchetypes(dojoDBData.archetypes);

    } catch {
      console.log('Error in fetching dojoDB');
    }
  }


  React.useEffect(() => {
    getDojoDBData();
    // getFormsData();
    // getArchetypesData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode} allForms={allForms} selectedForm={selectedForm} setSelectedForm={setSelectedForm}
        allArchetypes={allArchetypes} selectedArchetypes={selectedArchetypes} setSelectedArchetypes={setSelectedArchetypes} />
      <Box>
        <Box>
          <FormComponent selectedForm={selectedForm} allForms={allForms} />
          <ArchetypeComponent allArchetypes={allArchetypes} selectedArchetypes={selectedArchetypes}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
