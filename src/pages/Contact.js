import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div id="page" className="page contact-page">

        <div className="page-content">
          <div></div>
          <div className="section-content">
            <div className="contact">
              <div className="commonForm"><h1 className="commonForm__title">Get in touch with MyKanal.</h1>
                <form method="POST"
                      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                      className="commonForm__form"><input type="hidden" name="oid"
                                                          value="00D1U000000r8rM"/><input type="hidden"
                                                                                          name="retURL"
                                                                                          value="https://mykanal.com/contact?s=1"/><input
                  type="hidden" name="lead_source" value="Website"/><input type="hidden" name="Referrer__c"
                                                                           value=""/>
                  <div className="inputGroup row commonForm--firstInputSpacing"><label
                    className="form inputGroup__label">Your Name</label>
                    <div>
                      <div className="commonForm_nameRow">
                        <div className="inputGroup col-xs-12 col-sm-6 commonForm--halfLeft">
                          <div>
                            <div className="ui error input"><input type="text"
                                                                   name="first_name"
                                                                   placeholder="First Name"
                                                                   value=""/></div>
                          </div>
                          <ul className="inputErrors">
                            <li>Field cannot be blank.</li>
                          </ul>
                        </div>
                        <div className="inputGroup col-xs-12 col-sm-6 commonForm--halfRight">
                          <div>
                            <div className="ui input"><input type="text" name="last_name"
                                                             placeholder="Last Name" value=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inputGroup "><label className="form inputGroup__label">Email
                    Address</label>
                    <div>
                      <div className="ui input"><input type="text" name="email"
                                                       placeholder="e.g. johndoe@acmeinc.com"
                                                       value=""/></div>
                    </div>
                  </div>
                  <div className="inputGroup "><label className="form inputGroup__label">Country of
                    Residence</label>
                    <div>
                      <div name="country_residence__c" role="combobox" aria-expanded="false"
                           className="ui fluid search selection dropdown"><input type="text"
                                                                                 aria-autocomplete="list"
                                                                                 autoComplete="cor"
                                                                                 className="search"
                                                                                 tabIndex="0"
                                                                                 value=""/>
                        <div className="default text" role="alert" aria-live="polite">Select Your
                          Country
                        </div>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        <div role="listbox" className="menu transition">
                          <div role="option" aria-checked="false" aria-selected="true"
                               className="selected item" style={{pointerEvents: "all"}}><i
                            className="af flag"></i><span className="text">Afghanistan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ax flag"></i><span className="text">Åland Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="al flag"></i><span className="text">Albania</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="dz flag"></i><span className="text">Algeria</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="as flag"></i><span className="text">American Samoa</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ad flag"></i><span className="text">Andorra</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ao flag"></i><span className="text">Angola</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ai flag"></i><span className="text">Anguilla</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ag flag"></i><span
                            className="text">Antigua and Barbuda</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ar flag"></i><span className="text">Argentina</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="am flag"></i><span className="text">Armenia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="aw flag"></i><span className="text">Aruba</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="au flag"></i><span className="text">Australia</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="at flag"></i><span className="text">Austria</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="az flag"></i><span className="text">Azerbaijan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bs flag"></i><span className="text">Bahamas</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bh flag"></i><span className="text">Bahrain</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bd flag"></i><span className="text">Bangladesh</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bb flag"></i><span className="text">Barbados</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="by flag"></i><span className="text">Belarus</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="be flag"></i><span className="text">Belgium</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bz flag"></i><span className="text">Belize</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bj flag"></i><span className="text">Benin</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bm flag"></i><span className="text">Bermuda</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bt flag"></i><span className="text">Bhutan</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bo flag"></i><span className="text">Bolivia, Plurinational State of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ba flag"></i><span className="text">Bosnia and Herzegovina</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bw flag"></i><span className="text">Botswana</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bv flag"></i><span className="text">Bouvet Island</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="br flag"></i><span className="text">Brazil</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="io flag"></i><span className="text">British Indian Ocean Territory</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bn flag"></i><span
                            className="text">Brunei Darussalam</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bg flag"></i><span className="text">Bulgaria</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bf flag"></i><span className="text">Burkina Faso</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="bi flag"></i><span className="text">Burundi</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kh flag"></i><span className="text">Cambodia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cm flag"></i><span className="text">Cameroon</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ca flag"></i><span className="text">Canada</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cv flag"></i><span className="text">Cape Verde</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ky flag"></i><span className="text">Cayman Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cf flag"></i><span className="text">Central African Republic</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="td flag"></i><span className="text">Chad</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cl flag"></i><span className="text">Chile</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cn flag"></i><span className="text">China</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cx flag"></i><span
                            className="text">Christmas Island</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cc flag"></i><span className="text">Cocos (Keeling) Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="co flag"></i><span className="text">Colombia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="km flag"></i><span className="text">Comoros</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cg flag"></i><span className="text">Congo</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cd flag"></i><span
                            className="text">Congo, the Democratic Republic of the</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ck flag"></i><span className="text">Cook Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cr flag"></i><span className="text">Costa Rica</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ci flag"></i><span className="text">Côte d'Ivoire</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="hr flag"></i><span className="text">Croatia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cu flag"></i><span className="text">Cuba</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cy flag"></i><span className="text">Cyprus</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="cz flag"></i><span className="text">Czech Republic</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="dk flag"></i><span className="text">Denmark</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="dj flag"></i><span className="text">Djibouti</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="dm flag"></i><span className="text">Dominica</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="do flag"></i><span
                            className="text">Dominican Republic</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ec flag"></i><span className="text">Ecuador</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="eg flag"></i><span className="text">Egypt</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sv flag"></i><span className="text">El Salvador</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gq flag"></i><span
                            className="text">Equatorial Guinea</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="er flag"></i><span className="text">Eritrea</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ee flag"></i><span className="text">Estonia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="et flag"></i><span className="text">Ethiopia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="fk flag"></i><span className="text">Falkland Islands (Malvinas)</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="fo flag"></i><span className="text">Faroe Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="fj flag"></i><span className="text">Fiji</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="fi flag"></i><span className="text">Finland</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="fr flag"></i><span className="text">France</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gf flag"></i><span className="text">French Guiana</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pf flag"></i><span
                            className="text">French Polynesia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tf flag"></i><span className="text">French Southern Territories</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ga flag"></i><span className="text">Gabon</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gm flag"></i><span className="text">Gambia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ge flag"></i><span className="text">Georgia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="de flag"></i><span className="text">Germany</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gh flag"></i><span className="text">Ghana</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gi flag"></i><span className="text">Gibraltar</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gr flag"></i><span className="text">Greece</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gl flag"></i><span className="text">Greenland</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gd flag"></i><span className="text">Grenada</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gp flag"></i><span className="text">Guadeloupe</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gu flag"></i><span className="text">Guam</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gt flag"></i><span className="text">Guatemala</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gn flag"></i><span className="text">Guinea</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gw flag"></i><span className="text">Guinea-Bissau</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gy flag"></i><span className="text">Guyana</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ht flag"></i><span className="text">Haiti</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="hm flag"></i><span className="text">Heard Island and McDonald Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="va flag"></i><span className="text">Holy See (Vatican City State)</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="hn flag"></i><span className="text">Honduras</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="hk flag"></i><span className="text">Hong Kong</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="hu flag"></i><span className="text">Hungary</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="is flag"></i><span className="text">Iceland</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="in flag"></i><span className="text">India</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="id flag"></i><span className="text">Indonesia</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ir flag"></i><span className="text">Iran, Islamic Republic of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="iq flag"></i><span className="text">Iraq</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ie flag"></i><span className="text">Ireland</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="il flag"></i><span className="text">Israel</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="it flag"></i><span className="text">Italy</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="jm flag"></i><span className="text">Jamaica</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="jp flag"></i><span className="text">Japan</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="jo flag"></i><span className="text">Jordan</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kz flag"></i><span className="text">Kazakhstan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ke flag"></i><span className="text">Kenya</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ki flag"></i><span className="text">Kiribati</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kp flag"></i><span
                            className="text">Korea, Democratic People's Republic of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kr flag"></i><span
                            className="text">Korea, Republic of</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kw flag"></i><span className="text">Kuwait</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kg flag"></i><span className="text">Kyrgyzstan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="la flag"></i><span className="text">Lao People's Democratic Republic</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lv flag"></i><span className="text">Latvia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lb flag"></i><span className="text">Lebanon</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ls flag"></i><span className="text">Lesotho</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lr flag"></i><span className="text">Liberia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ly flag"></i><span className="text">Libya</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="li flag"></i><span className="text">Liechtenstein</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lt flag"></i><span className="text">Lithuania</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lu flag"></i><span className="text">Luxembourg</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mo flag"></i><span className="text">Macao</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mk flag"></i><span
                            className="text">Macedonia, the Former Yugoslav Republic of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mg flag"></i><span className="text">Madagascar</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mw flag"></i><span className="text">Malawi</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="my flag"></i><span className="text">Malaysia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mv flag"></i><span className="text">Maldives</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ml flag"></i><span className="text">Mali</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mt flag"></i><span className="text">Malta</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mh flag"></i><span
                            className="text">Marshall Islands</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mq flag"></i><span className="text">Martinique</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mr flag"></i><span className="text">Mauritania</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mu flag"></i><span className="text">Mauritius</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="yt flag"></i><span className="text">Mayotte</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mx flag"></i><span className="text">Mexico</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="fm flag"></i><span className="text">Micronesia, Federated States of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="md flag"></i><span
                            className="text">Moldova, Republic of</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mc flag"></i><span className="text">Monaco</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mn flag"></i><span className="text">Mongolia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="me flag"></i><span className="text">Montenegro</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ms flag"></i><span className="text">Montserrat</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ma flag"></i><span className="text">Morocco</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mz flag"></i><span className="text">Mozambique</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mm flag"></i><span className="text">Myanmar</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="na flag"></i><span className="text">Namibia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="nr flag"></i><span className="text">Nauru</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="np flag"></i><span className="text">Nepal</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="nl flag"></i><span className="text">Netherlands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="nc flag"></i><span className="text">New Caledonia</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="nz flag"></i><span className="text">New Zealand</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ni flag"></i><span className="text">Nicaragua</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ne flag"></i><span className="text">Niger</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ng flag"></i><span className="text">Nigeria</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="nu flag"></i><span className="text">Niue</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="nf flag"></i><span className="text">Norfolk Island</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="mp flag"></i><span className="text">Northern Mariana Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="no flag"></i><span className="text">Norway</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="om flag"></i><span className="text">Oman</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pk flag"></i><span className="text">Pakistan</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pw flag"></i><span className="text">Palau</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ps flag"></i><span
                            className="text">Palestine, State of</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pa flag"></i><span className="text">Panama</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pg flag"></i><span
                            className="text">Papua New Guinea</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="py flag"></i><span className="text">Paraguay</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pe flag"></i><span className="text">Peru</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ph flag"></i><span className="text">Philippines</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pn flag"></i><span className="text">Pitcairn</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pl flag"></i><span className="text">Poland</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pt flag"></i><span className="text">Portugal</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pr flag"></i><span className="text">Puerto Rico</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="qa flag"></i><span className="text">Qatar</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="re flag"></i><span className="text">Réunion</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ro flag"></i><span className="text">Romania</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ru flag"></i><span
                            className="text">Russian Federation</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="rw flag"></i><span className="text">Rwanda</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sh flag"></i><span
                            className="text">Saint Helena, Ascension and Tristan da Cunha</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="kn flag"></i><span
                            className="text">Saint Kitts and Nevis</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lc flag"></i><span className="text">Saint Lucia</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="pm flag"></i><span className="text">Saint Pierre and Miquelon</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="vc flag"></i><span className="text">Saint Vincent and the Grenadines</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ws flag"></i><span className="text">Samoa</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sm flag"></i><span className="text">San Marino</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="st flag"></i><span
                            className="text">Sao Tome and Principe</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sa flag"></i><span className="text">Saudi Arabia</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sn flag"></i><span className="text">Senegal</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="rs flag"></i><span className="text">Serbia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sc flag"></i><span className="text">Seychelles</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sl flag"></i><span className="text">Sierra Leone</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sg flag"></i><span className="text">Singapore</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sk flag"></i><span className="text">Slovakia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="si flag"></i><span className="text">Slovenia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sb flag"></i><span
                            className="text">Solomon Islands</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="so flag"></i><span className="text">Somalia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="za flag"></i><span className="text">South Africa</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gs flag"></i><span
                            className="text">South Georgia and the South Sandwich Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="es flag"></i><span className="text">Spain</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="lk flag"></i><span className="text">Sri Lanka</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sd flag"></i><span className="text">Sudan</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sr flag"></i><span className="text">Suriname</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sj flag"></i><span className="text">Svalbard and Jan Mayen</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sz flag"></i><span className="text">Swaziland</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="se flag"></i><span className="text">Sweden</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ch flag"></i><span className="text">Switzerland</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="sy flag"></i><span
                            className="text">Syrian Arab Republic</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tw flag"></i><span className="text">Taiwan, Province of China</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tj flag"></i><span className="text">Tajikistan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tz flag"></i><span className="text">Tanzania, United Republic of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="th flag"></i><span className="text">Thailand</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tl flag"></i><span className="text">Timor-Leste</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tg flag"></i><span className="text">Togo</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tk flag"></i><span className="text">Tokelau</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="to flag"></i><span className="text">Tonga</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tt flag"></i><span
                            className="text">Trinidad and Tobago</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tn flag"></i><span className="text">Tunisia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tr flag"></i><span className="text">Turkey</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tm flag"></i><span className="text">Turkmenistan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tc flag"></i><span className="text">Turks and Caicos Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="tv flag"></i><span className="text">Tuvalu</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ug flag"></i><span className="text">Uganda</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ua flag"></i><span className="text">Ukraine</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ae flag"></i><span
                            className="text">United Arab Emirates</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="gb flag"></i><span className="text">United Kingdom</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="us flag"></i><span className="text">United States</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="um flag"></i><span className="text">United States Minor Outlying Islands</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="uy flag"></i><span className="text">Uruguay</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="uz flag"></i><span className="text">Uzbekistan</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="vu flag"></i><span className="text">Vanuatu</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ve flag"></i><span className="text">Venezuela, Bolivarian Republic of</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="vn flag"></i><span className="text">Viet Nam</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="vg flag"></i><span className="text">Virgin Islands, British</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="vi flag"></i><span
                            className="text">Virgin Islands, U.S.</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="wf flag"></i><span
                            className="text">Wallis and Futuna</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="eh flag"></i><span className="text">Western Sahara</span>
                          </div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="ye flag"></i><span className="text">Yemen</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="zm flag"></i><span className="text">Zambia</span></div>
                          <div role="option" aria-checked="false" aria-selected="false"
                               className="item" style={{pointerEvents: "all"}}><i
                            className="zw flag"></i><span className="text">Zimbabwe</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="country_residence__c" value=""/>
                  <div className="inputGroup "/>
                  <label className="form inputGroup__label">Who You
                    Are</label>
                  <div>
                    <div name="recordTypeSelect" role="listbox" aria-expanded="false"
                         className="ui fluid selection dropdown" tabIndex="0">
                      <div className="default text" role="alert" aria-live="polite">Select
                        Category
                      </div>
                      <i aria-hidden="true" className="dropdown icon"></i>
                      <div className="menu transition">
                        <div role="option" aria-checked="false" aria-selected="true"
                             className="selected item" style={{pointerEvents: "all"}}><span
                          className="text">I am an investor</span></div>
                        <div role="option" aria-checked="false" aria-selected="false"
                             className="item" style={{pointerEvents: "all"}}><span
                          className="text">I want to raise capital </span></div>
                        <div role="option" aria-checked="false" aria-selected="false"
                             className="item" style={{pointerEvents: "all"}}><span
                          className="text">I want to partner</span></div>
                        <div role="option" aria-checked="false" aria-selected="false"
                             className="item" style={{pointerEvents: "all"}}><span
                          className="text">I am a broker-dealer</span></div>
                        <div role="option" aria-checked="false" aria-selected="false"
                             className="item" style={{pointerEvents: "all"}}><span
                          className="text">Other</span></div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="recordType" value=""/>
                  <div className="inputGroup ">
                    <div>
                      <div className="checkbox">
                        <div className="checkbox__box"><input type="checkbox"
                                                              id="0.21362451011997008"
                                                              name="agreesToUpdates"
                                                              className="checkbox__input"
                                                              value="on"/><label
                          className="checkbox__mask" htmlFor="0.21362451011997008"><i
                          className="material-icons checkbox__check">check</i>
                          <div className="checkbox__checkMask"></div>
                        </label></div>
                        <label className="checkbox__label">Yes, I would like to receive
                          email updates from MyKanal and its affiliates.</label></div>
                    </div>
                  </div>
                  <input type="hidden" id="emailOptOut" name="emailOptOut" value="0"/>
                  <div className="u-buttonRow universalForm--submitButton">
                    <button id="contactUniversalSubmit" type="submit"
                            className="btn btn--centerCta btn-primary">Submit
                    </button>
                  </div>
                  <div className="universalForm--contactDivider"></div>
                  <div className="universalForm--contact universalForm--firstContact">
                    <div className="universalForm--contactLabel">Press inquiries</div>
                    <div className="universalForm--contactEmail">press@mykanal.com</div>
                  </div>
                </form>
              </div>

            {/*</form>*/}
          </div>
        </div>
      </div>
  </div>

  )
  }
}
