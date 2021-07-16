import React from "react";
import { LocalizeProvider, Translate } from "react-localize-redux";
import { connect } from "react-redux";
import { wrapper } from "../../../store";
import {
  translationsPayload,
  mergeTranslations,
} from "../../../translations/payload";
import HeaderTranslations from "../../../translations/header-translations.json";
import Footer from "../../../components/app/footer";
import { Header } from "../../../components/app/header";
import {
  server_fetchHeader,
  server_fetchFooter,
} from "../../../lib/api/client/serverCommon";
import Head from "next/head";
import { MobileCategories } from "../../../components/app/pages/MobileCategories";
import { server_vendorCategoies } from "../../../lib/api/client/serverVendors";
import {
  useUserAgent,
} from "next-useragent";
class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mobileCategories = <MobileCategories />;
    return (
      <LocalizeProvider
        initialize={translationsPayload(
          mergeTranslations(HeaderTranslations),
          this.props.lang
        )}
      >
        
        <Translate>
          {({ translate: t }) => {
            return (
              <Head>
                <title>{t("@categoryTitle")}</title>
              </Head>
            );
          }}
        </Translate>
        <Header
          data={this.props.data.header}
          lang={this.props.lang}
          curr={this.props.curr}
          isDesktop={this.props.ua.isDesktop}
        />
        {mobileCategories}
        <Footer lang={this.props.lang} isDesktop={this.props.ua.isDesktop} data={this.props.data.footer} cartCount ={this.props.data.header.cartCount}/>
      </LocalizeProvider>
    );
  }
}

export default connect()(CategoriesPage);

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // const generatedFilters = searchQueryToFilters(query);
    const ua = useUserAgent(context.req.headers["user-agent"]);

    const Result = await Promise.all([
      server_fetchHeader(ua.isDesktop),
      server_fetchFooter(),
      server_vendorCategoies(),
      // server_fetchSearch(generatedFilters),
    ]);

    return {
      props: {
        ua,
        data: {
          header: Result[0].result,
          footer: Result[1].result,
          categories: Result[2].result,
        },
      },
    };
  }
);
