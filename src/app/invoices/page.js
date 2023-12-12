"use client";
import { useCallback, useEffect, useState } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import ArrowLeftIcon from "@untitled-ui/icons-react/build/esm/ArrowLeft";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
// import { invoicesApi } from "../../../api/invoices";
import { useMounted } from "../hooks/use-mounted";
import { usePageView } from "../hooks/use-page-view";
import { InvoicePdfDialog } from "../sections/invoice/invoice-pdf-dialog";
import { InvoicePdfDocument } from "../sections/invoice/invoice-pdf-document";
import { InvoicePreview } from "../sections/invoice/invoice-preview";

// const useInvoice = () => {
//   const isMounted = useMounted();
//   const [invoice, setInvoice] = useState(null);

//   const getInvoice = useCallback(async () => {
//     try {
//       const response = await invoicesApi.getInvoice();

//       if (isMounted()) {
//         setInvoice(response);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }, [isMounted]);

//   useEffect(
//     () => {
//       getInvoice();
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     []
//   );

//   return invoice;
// };

const Page = () => {
  // const invoices = useInvoice();
  const [openPdf, setOpenPdf] = useState(false);
  const invoice = {
    id: "5ecb86785312dcc69b5799ad",
    currency: "$",
    customer: {
      address: "271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand",
      company: "Countdown Grey Lynn",
      email: "contact@acme.com",
      name: "ACME SRL",
      taxId: "6934656584231",
    },
    dueDate: "26th Nov, 2023",
    issueDate: "21st Nov, 2023",
    items: [
      {
        id: "5ecb8694db1760a701dfbf74",
        currency: "$",
        description: "Freelancer Subscription (12/05/2019 - 11/06/2019)",
        quantity: 1,
        totalAmount: 55.5,
        unitAmount: 55.5,
      },
    ],
    number: "INV-0019",
    status: "collected",
    subtotalAmount: 50.0,
    taxAmount: 5.5,
    totalAmount: 55.5,
  };

  usePageView();
  return (
    <>
      <Head>
        <title>Donation Details</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack divider={<Divider />} spacing={4}>
            <Stack spacing={4}>
              {/* <div>
                <Link
                  color="text.primary"
                  component={NextLink}
                  href={paths.dashboard.invoices.index}
                  sx={{
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                  underline="hover"
                >
                  <SvgIcon sx={{ mr: 1 }}>-----</SvgIcon>
                  <Typography variant="subtitle2">Donations</Typography>
                </Link>
              </div> */}
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      height: 42,
                      width: 42,
                    }}
                  >
                    {invoice.customer.name}
                  </Avatar>
                  <div>
                    <Typography variant="h4">{invoice.number}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      Saad Ashraf
                    </Typography>
                  </div>
                </Stack>

                <Stack alignItems="center" direction="row" spacing={2}>
                  <Button color="inherit" onClick={() => setOpenPdf(true)}>
                    Preview
                  </Button>
                  <PDFDownloadLink
                    document={<InvoicePdfDocument invoice={invoice} />}
                    fileName="invoice"
                    style={{ textDecoration: "none" }}
                  >
                    <Button color="primary" variant="contained">
                      Download
                    </Button>
                  </PDFDownloadLink>
                </Stack>
              </Stack>
            </Stack>
            <InvoicePreview invoice={invoice} />
          </Stack>
        </Container>
      </Box>
      <InvoicePdfDialog
        invoice={invoice}
        onClose={() => setOpenPdf(false)}
        open={openPdf}
      />
    </>
  );
};

export default Page;
