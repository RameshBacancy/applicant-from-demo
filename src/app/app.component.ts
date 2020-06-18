import { Component, OnInit } from '@angular/core';


interface ProjectAddress {
  occupant: string;
  projectAddress: string;
  taxAssessorParcel: string;
  dataAccuracy: boolean;
  TractId: string;
  cityMaster: string;
}

interface Address {
  no: number;
  fraction: string;
  direct: string;
  streetName: string;
  streetType: string;
  space: string;
}

interface ApplicantAddress {
  name: string;
  address: Address;
  city: string;
  state: string;
  zipcode: number;
  phone: number;
  email: string;
}

interface OrgGroup {
  model: string;
  new: string;
  r3: string;
}
interface InspectionClass {
  housing: string;
  plans: string;
}
interface FccFupCode {
  newDwelling: string;
  valuation: string;
  footage: string;
}
interface OccupancyRating {
  type5: string;
  duplex: string;
  notRated: string;
  load: string;
  projNumber: string;
}
interface PlanRequire {
  date: string;
  initials: string;
}
interface ProjectEstimation {
  expires: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isApplicantFlag = true;
  projectAddres: ProjectAddress = {
    occupant: '',
    projectAddress: '',
    taxAssessorParcel: '',
    dataAccuracy: false,
    TractId: '',
    cityMaster: ''
  };

  ApplicantAddress: ApplicantAddress = {
    name: '',
    address: {
      no: null,
      fraction: '',
      direct: '',
      streetName: '',
      streetType: '',
      space: '',
    },
    city: '',
    state: '',
    zipcode: null,
    phone: null,
    email: ''
  };

  orgGroup: OrgGroup = {
    model: '',
    new: '',
    r3: ''
  };

  inspectionClass: InspectionClass = {
    housing: '',
    plans: ''
  };

  fccFupCode: FccFupCode = {
    newDwelling: '',
    valuation: '',
    footage: '',
  };

  occupancyRate: OccupancyRating = {
    type5: '',
    duplex: '',
    notRated: '',
    load: '',
    projNumber: '',
  };

  planRequire: PlanRequire = {
    date: '',
    initials: '',
  };

  projectEstimation: ProjectEstimation = {
    expires: '',
  };


  // starting form
  appForm = {
    apkDate: '',
    projectNo: '',
  };
  // Project Addres
  projectAddressForm = {
    occupant: '',
    projectAddress: '',
    taxAssessorParcel: '',
    tractId: '',
    dataAccuracy: true,
    cityMaster: '',
    discription: ''
  };

  // Applicant form
  applicantFrom = {
    individualOrCorpo_Firm: '',
    nameGeneral: '',
    nameTester: '',
    nameOne: '',
    addressNo: '',
    addressFraction: '',
    addressDirection: '',
    addressStreetType: '',
    addressStreetName: '',
    addressSpace: '',
    cityHousing: '',
    cityState: '',
    cityZipcode: '',
    cityN: '',
    phone: '',
    email: ''
  };

  // Applicant form
  ownerFrom = {
    individualOrCorpo_Firm: '',
    nameGeneral: '',
    nameTester: '',
    nameOne: '',
    addressNo: '',
    addressFraction: '',
    addressDirection: '',
    addressStreetType: '',
    addressStreetName: '',
    addressSpace: '',
    cityHousing: '',
    cityState: '',
    cityZipcode: '',
    cityN: '',
    phone: '',
    email: ''
  };

  // Org group form
  orgForm = {
    m1: '',
    m2: '',
    m3: '',
    m4: '',
    m5: '',
    m6: '',
  };

  // Inspection form
  inspectionForm = {
    m1: '',
    m2: '',
    m3: '',
    m4: '',
    m5: '',
    m6: '',
  };

  // FCC form
  fccFrom = {
    m1: '',
    m2: '',
    m3: '',
    m4: '',
    estimated: '',
    footage: ''
  };

  // Occupancy form
  occupancyForm = {
    m1: '',
    m2: '',
    m3: '',
    m4: '',
    m5: '',
    m6: '',
    load: '',
    proj_no: ''
  };

  // Plan Review
  planReviewForm = {
    required: true,
    date: '',
    initials: ''
  };

  // Project Extension
  projectExtensionForm = {
    enable: true,
    expires: ''
  };



  lables: any = {
    apkDate: 'Application Date:',
    projectNo: 'Project Number:',
    projAddress: 'Project Address',
    ownerInfo: 'Owner Name & Address Information',
    apkInfo: 'Applicant Name & Address Information',
    occupant: 'Occupant:',
    projectAddress: 'Project Address:',
    taxAssessorParcel: 'Tax Assessor Parcel:',
    tractId: 'Tract Id:',
    dataAccuracy: 'Data Accuracy has been cerified',
    update: '102 Update',
    cityMaster: 'City Master:',
    discription: 'Discription:',
    fml: 'Last/First/Middle',
    individual: 'Individual',
    corpo_Firm: 'Corporation or Firm',
    apkbutton: 'Show Owner Builder',
    builder: 'Show Application  Info',
    address: 'Address',
    no: 'No.',
    fraction: 'Fraction',
    direction: 'Direction',
    streetType: 'Street Type',
    streetName: 'Street Name',
    space: 'Space',
    housing: 'HOUSING',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
    phone: 'Phone',
    email: 'Email',
    copybtn: 'Copy Name & Address from Master Entry',
    orglbl: 'Org Group/value-basis/Building category',
    inspectionlbl: 'Inspection Class/Certificate Required/Plans Submitted',
    fcc_fup: 'FCC Code/FPU Code',
    estimated: 'Estimated Valuation',
    footage: 'Square Footage',
    rating: 'Occupancy Code-Material Type/GroupFire Rating',
    load: 'Occupancy Load',
    proj_no: 'Master Project Number',
    plan: 'Plan Review Approval Required',
    required: 'Required',
    date: 'Date',
    initials: 'Initials',
    extension: 'Project Extension (Check for Automatic 180 Extension)',
    enable: 'Enable 180 Extension',
    expires: 'Expiration Date',
  };

  constructor() { }

  ngOnInit() {
  }

  updates() {
    this.isApplicantFlag = !this.isApplicantFlag;
  }
}
