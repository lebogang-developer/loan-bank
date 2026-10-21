-- CreateTable
CREATE TABLE "ContactForm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplyLoan" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "loanType" TEXT NOT NULL,
    "loanAmount" DECIMAL(14,2) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "employmentStatus" TEXT NOT NULL,
    "monthlyIncome" DECIMAL(14,2) NOT NULL,
    "carModel" TEXT,
    "propertyAddress" TEXT,
    "varsityName" TEXT,
    "studyProgram" TEXT,
    "idCopyKey" TEXT,
    "payslipKey" TEXT,
    "proofOfAddressKey" TEXT,
    "varsityLetterKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApplyLoan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ApplyLoan_clerkUserId_idx" ON "ApplyLoan"("clerkUserId");

-- CreateIndex
CREATE INDEX "ApplyLoan_status_idx" ON "ApplyLoan"("status");
