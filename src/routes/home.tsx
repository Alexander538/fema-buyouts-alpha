import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));

function Home() {
  return (
    <>
      <main>
        <div>
          <Stack spacing={2} mt={5}>
            <Item>Item 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta autem molestias sint tempore quisquam animi natus ipsam, veniam possimus ea illo nostrum, illum ipsum saepe perspiciatis cumque quas sed?</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>
      </main>

    </>
  );
}

export default Home;
